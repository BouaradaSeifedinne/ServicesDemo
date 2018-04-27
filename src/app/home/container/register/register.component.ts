import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../../providers/register.service';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private http:HttpClient, private register:RegisterService, private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }

  ngOnInit() {
  }

  signUp () {
    
    let data = {
      username:this.username,
      email:this.email,
      password:this.password
    }

    this.register.register(data, this.translate.currentLang).subscribe(data => {
      console.log(data);
    });
  }

}
