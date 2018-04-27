import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  httpOptions:object;

  constructor(private http:HttpClient) { }

  login (data:object , lang:string){
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': lang
      })
    };

    console.log("function login service ok");
    console.log(data);
    
    return this.http.post("http://127.0.0.1:3000/login", data, this.httpOptions );
  }

}
