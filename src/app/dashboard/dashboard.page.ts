import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  postlist:any;

  constructor(public authService:AuthserviceService) { 
    authService.getallPosts().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.postlist = data;
    }) 
  }

  ngOnInit() {
  }

}
