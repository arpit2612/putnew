import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authservice:AuthserviceService,public router:Router,nStorage:Storage,navcontroller:NavController) {
    nStorage.get('uid').then((val) => {
     if(val != null){
       router.navigate(['createprofile'])
     }
    });
  }

  login(){
   this.router.navigate(['login'])
  }

  register(){
   this.router.navigate(['register'])
  }

}
