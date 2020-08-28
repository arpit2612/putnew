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

  register(email,password){
   console.log(email.value);
   console.log(password.value);
   this.authService.CreateLocalUser(email.value,password.value).then(res => {
    this.authService.SendVerificationMail(); 
    console.log(JSON.stringify(res))
    var result = confirm( "Verification Mail has been sent to the respected Mail ID" );
    if ( result ) {
    // the user clicked ok
    this.router.navigate(['home'])
    } else {
    // the user clicked cancel or closed the confirm dialog.
    } 
   })
  }

}
