import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private fireauth:AngularFireAuth,private router:Router,public ngZone: NgZone,
    public firestore:AngularFirestore,public storage:Storage) { }

  SignInAsLocalUser(email,password){
   return this.fireauth.signInWithEmailAndPassword(email,password);  
  }

  CreateLocalUser(email,password){
   return this.fireauth.createUserWithEmailAndPassword(email,password); 
  }

  SendVerificationMail() {
    return this.fireauth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
       this.router.ngOnDestroy
    })
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.fireauth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
     // this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  getallPosts(){
   return this.firestore.collection('Posts').valueChanges();
  }

  saveProfileToFirestore(
    firstname,
    middlename,
    lastname,
    primarycontact,
    secondarycontact,
    houseno,
    street,
    area,
    landmark,
    city,
    state,
    country,
    zip){
    return this.storage.get('uid').then(val => {
    return this.firestore.collection('Users').doc(val).set({
    firstname: firstname,
    middlename: middlename,
    lastname: lastname,
    primarycontact: primarycontact,
    secondarycontact: secondarycontact,
    houseno: houseno,
    street: street,
    area:area,
    landmark:landmark,
    city:city,
    state:state,
    country: country,
    zip:zip       
     })
    })
  }


}
