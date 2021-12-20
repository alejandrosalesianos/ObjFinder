import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';


const COLLECTION_USER = 'users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  googleAuth() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => {
      this.firestore.collection('users').doc(resp?.user?.uid)
      .set({ name: resp.user?.displayName, 
        email: resp.user?.email, 
        photoUrl: resp.user?.photoURL });
        console.log(resp)
      localStorage.setItem('name', resp.user?.displayName? resp.user?.displayName: '');
      localStorage.setItem('photoUrl', resp.user?.photoURL? resp.user?.photoURL: '');
      localStorage.setItem('email', resp.user?.email? resp.user?.email: '');
      localStorage.setItem('uid', resp.user?.uid? resp.user?.uid: '');
      this.router.navigate(['/map'])
    });
  }
  getPhotoUrl(){
    return localStorage.getItem('photoUrl');
  }
  getEmail(){
    return localStorage.getItem('email');
  }

}
