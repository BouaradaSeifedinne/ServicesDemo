import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(private route: Router) { }

  getUrlInfo() {
    if(this.route.url == '/login' || this.route.url == '/register'){
      return false;
    }
    else
    {
      return true;
    }
  
  }
}
