import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../../providers/register.service';
import {TranslateService} from '@ngx-translate/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {

  username: string;
  email:string;
  password:string;

  constructor(private http:HttpClient, private register:RegisterService, private translate: TranslateService, public toastr: ToastsManager, vcr: ViewContainerRef, private route:Router) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  signUp () {
    
    let data = {
      username:this.username,
      email:this.email,
      password:this.password
    }

    this.register.register(data, this.translate.currentLang).subscribe(res => {
      let array = Object.values(res);
      this.toastr.success(array[0], 'Success!');
      
      
    },
    error => {
      console.log(error);
      if(error.error.err){
        this.toastr.warning(error.error.err, 'Alert!');
        this.toastr.error(error.statusText, error.status);
      }
    });
  }

}
