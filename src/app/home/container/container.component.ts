import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  users: any = [];
  constructor(private route:Router) { }

  ngOnInit() {

    if(localStorage.getItem("users")){
      this.users = JSON.parse(localStorage.getItem("users"));
      if(this.users.isLogin){
        this.route.navigate(['/']);
      }else if (this.route.url == '/register'){
        this.route.navigate(['/register']);
      }else{
        this.route.navigate(['/login']);
      }
    }else if (this.route.url === "/register"){
      this.route.navigate(['/register']);
    }
    else{
      this.route.navigate(['/login']);
    }
  }

}
