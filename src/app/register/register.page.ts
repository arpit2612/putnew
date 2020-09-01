import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public authService:AuthserviceService,public router:Router,public navController:NavController) { }

  ngOnInit() {
  }

  register(firstname,middlename,lastname,email,password){
   console.log(email.value);
   console.log(password.value);
   console.log(firstname.value);
   console.log(middlename.value);
   console.log(lastname.value);
   this.authService.CreateLocalUser(email.value,password.value).then(res => {
    this.authService.registerToFirebase(res.user.uid,firstname.value,middlename.value,lastname.value).then(res => {
      this.authService.SendVerificationMail(); 
      console.log(JSON.stringify(res))
      var result = confirm( "Verification Mail has been sent to the respected Mail ID" );
      if ( result ) {
      this.router.navigate(['home'])
      } else {
      } 
    }); 
    
   }).catch(res => {
     console.log(JSON.stringify(res));
     if(res.message == "The email address is badly formatted."){
       window.alert("Please Enter a valid Email Address")
     }
   })
  }

}
