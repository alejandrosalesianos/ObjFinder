import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Objetos from '../interface/objetos.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  listaFound!: AngularFirestoreCollection<Objetos>;
  listaLost!: AngularFirestoreCollection<Objetos>;

  constructor(private firestore: AngularFirestore) {

    let userId = localStorage.getItem('uid');
    this.listaFound = this.firestore.collection(`users/${userId}/Encontrado`);
    this.listaLost = this.firestore.collection(`users/${userId}/Perdido`);
   }

   getLostObjects() : AngularFirestoreCollection<Objetos> {
    console.log(this.listaFound);
    return this.listaFound;
  }
  getFoundObjects() : AngularFirestoreCollection<Objetos> {
    console.log(this.listaLost);
    return this.listaLost;
  }
   }
