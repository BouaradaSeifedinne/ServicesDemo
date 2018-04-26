import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegisterService {

  httpOptions:object;

  constructor(private http:HttpClient) { }

  register (data, lang:string) {
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept-Language': lang
      })
    };

    return this.http.post("http://56413105.ngrok.io/register", data, this.httpOptions );
  }
}
