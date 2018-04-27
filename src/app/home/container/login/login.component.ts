import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{ LoginService } from '../../../providers/login.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  //loginForm:FormGroup;
  email: string;
  password: string;

  constructor(private login:LoginService, private http:HttpClient, private translate: TranslateService) { 
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    /*this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })*/
  }

  signIn () {
    
    let data = {
      username:this.email,
      password:this.password
    }

    console.log("function signIn ok");
    
    this.login.login(data, this.translate.currentLang).subscribe( data => {
      console.log(data);
    });
  }

}
