import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Toast } from '@ionic-native/toast/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService:AuthserviceService,private toast: Toast,private nStorage:Storage,
              public router:Router) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignInAsLocalUser(email.value, password.value)
      .then((res) => {
        const user = res.user;
        if(user.emailVerified){
          this.nStorage.set("uid",user.uid);
          this.nStorage.set("isProfileComplete","false");
          this.router.navigate(['createprofile'])
        }else{
          window.alert("User Email is Not Verified, Please Verify Email First");
          // this.toast.show(`User Email is Not Verified, Please Verify Email First`, '5000', 'center').subscribe(
          //   toast => {
          //     console.log(toast);
          //   }
          // );
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }



}
