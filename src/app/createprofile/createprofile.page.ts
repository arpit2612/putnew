import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.page.html',
  styleUrls: ['./createprofile.page.scss'],
})
export class CreateprofilePage implements OnInit {

  formgroup:FormGroup;
  firstname:String;
  middlename:String;
  lastname:String;
  primarycontact:String;
  secondarycontact:String;
  houseno:String;
  street:String;
  area:String;
  landmark:String;
  city:String;
  state:String;
  country:String;
  zip:String;
  associationname:String;
  category:String;
  postlist:any;
  

  constructor(public storage:Storage,public router:Router,public authService:AuthserviceService) { 
   storage.get('isProfileComplete').then(val => {
    if(val == "true"){
      router.navigate(['dashboard'])
    }else{
      console.log("dashboard Failed")
    } 
   });
   authService.getallPosts().subscribe((data) => {
    console.log(JSON.stringify(data));
    this.postlist = data;
  }) 
  }

  ngOnInit() {
  }

  saveProfile(){
    console.log(this.firstname);
    console.log(this.middlename);
    console.log(this.lastname);
    console.log(this.primarycontact);
    console.log(this.secondarycontact);
    console.log(this.houseno);
    console.log(this.street);
    console.log(this.area);
    console.log(this.landmark);
    console.log(this.city);
    console.log(this.state);
    console.log(this.country);
    console.log(this.zip);
    console.log(this.associationname);
    console.log(this.category);
    this.authService.saveProfileToFirestore(this.firstname,this.middlename,this.lastname,this.primarycontact,this.secondarycontact,
                                            this.houseno,this.street,this.area,this.landmark,this.city,this.state,this.country,this.zip,
                                            this.associationname,this.category).then(res=> {
                                              this.storage.set('isProfileComplete',"true").then(val => {
                                                this.router.navigate(['dashboard'])
                                              
                                               })  
                                            })
  }

  

}
