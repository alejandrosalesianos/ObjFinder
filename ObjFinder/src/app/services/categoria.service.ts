import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Lista from '../interface/lista.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  listasRef!: AngularFirestoreCollection<Lista>;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {
    this.listasRef = this.firestore.collection('Categoria');
   }

   getAll(): AngularFirestoreCollection<Lista> {
    return this.listasRef;
  }
}
