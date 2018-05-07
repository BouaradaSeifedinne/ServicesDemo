import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
import { Router } from '@angular/router';

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
  users : any = [];

  constructor(private login:LoginService, private http:HttpClient, private translate: TranslateService, private route:Router, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.toastr.setRootViewContainerRef(vcr);
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

    localStorage.clear();
    this.users = [];

    this.login.login(data, this.translate.currentLang).subscribe(
      res => {

        let array = Object.values(res);

        let user = {
          token: array[0],
          isLogin: true
        }
        
        this.users.push(user);

        localStorage.setItem("users", JSON.stringify(this.users));
        
        this.toastr.success(array[1], 'Success!');

        this.route.navigate(['/']);
        
      }, 
      error => {
        console.log(error);
        if(error.error){
          
          //alert(error.error.err);
          
          this.toastr.warning(error.error.err, 'Alert!');
          
          let user = {
            token: "null",
            isLogin: false
          }
          
          this.users.push(user);
          localStorage.setItem("users", JSON.stringify(this.users));
        }else{
          this.toastr.error('Server error', 'Oops!');
        }
      
    });
  }

}
