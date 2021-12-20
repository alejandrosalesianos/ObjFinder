import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, map, of } from 'rxjs';
import { Observable, } from 'rxjs';
import { Categorias } from 'src/app/interface/categorias.interface';
import Lista from 'src/app/interface/lista.interface';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  Categorias!: Categorias[];
  listasList!: Lista[];
  objeto!: string[];
  apiLoaded: Observable<boolean>;
  address: string = '';

  id: string[] = [];
  descripcion: string[] = [];
  fundacionDonBoscoLatLng: google.maps.LatLngLiteral = {lat: 37.36133765325532, lng: -5.964321690581096};
  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };
  tipo!:string;

  constructor(private httpClient: HttpClient,private categoriaService: CategoriaService, private firestore: AngularFirestore) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyByNlJfkMKkavCkpc9KMY0Wf5fASr4OOic', 'callback')
    .pipe(
      map(() => true),
      catchError(()=> of(false)),
    );
   }

  ngOnInit(): void {
    this.getCategorias();
  }

  searchAddress(){
    let addressSplited = this.address.split(',');
    this.fundacionDonBoscoLatLng = {lat:Number(addressSplited[0]),lng: Number(addressSplited[1])}
    console.log(this.address)
  }
  updateLocationMarker(event: google.maps.MapMouseEvent){
    localStorage.setItem('location',`${event.latLng?.lat()},${event.latLng?.lng()}`)
    console.log(this.fundacionDonBoscoLatLng)
    console.log(`${event.latLng?.lat()} , ${event.latLng?.lat()}`)
  }
  getPhotoUrl(){
    return localStorage.getItem('photoUrl');
  }
  getEmail(){
    return localStorage.getItem('email');
  }
  getCategorias():void{
    this.categoriaService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        id: c.payload.doc.id,...c.payload.doc.data()
      })
      )
      )
    ).subscribe(data => {
      this.listasList = data
    });
  }

  crearObjeto(){
    let id = localStorage.getItem('uid')
    let address = localStorage.getItem('location');
    address?.split(' ')
  this.firestore.collection(`users/${id}/${this.tipo}`).add({
    name: this.objeto,
    categoria: this.id,
    descripcion: this.descripcion,
    location: address});
}
}
