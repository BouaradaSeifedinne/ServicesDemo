import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../../providers/register.service';

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

  constructor(private http:HttpClient, private register:RegisterService) { }

  ngOnInit() {
  }

  signUp () {
    let data = {
      username:this.username,
      email:this.email,
      password:this.password
    }

    this.register.register(data, "fr").subscribe(data => {
      console.log(data);
    });
  }

}
