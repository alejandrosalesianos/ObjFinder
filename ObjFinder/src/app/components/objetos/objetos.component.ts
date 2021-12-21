import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import Lista from 'src/app/interface/lista.interface';
import { ObjetosService } from 'src/app/services/objetos.service';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {

  listaFound!: Lista[];
  listaLost!: Lista[];

  constructor(private objetoService: ObjetosService) { }

  ngOnInit(): void {
    this.getObjectFound()
    this.getObjectLost()
  }
  getPhotoUrl(){
    return localStorage.getItem('photoUrl');
  }
  getEmail(){
    return localStorage.getItem('email');
  }
  getObjectFound():void{
    this.objetoService.getFoundObjects().snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        id: c.payload.doc.id,...c.payload.doc.data()
      })
      )
      )
    ).subscribe(data => {
      this.listaFound = data
    });
  }
  getObjectLost():void{
    this.objetoService.getLostObjects().snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        id: c.payload.doc.id,...c.payload.doc.data()
      })
      )
      )
    ).subscribe(data => {
      this.listaLost = data
    });
  }
}
