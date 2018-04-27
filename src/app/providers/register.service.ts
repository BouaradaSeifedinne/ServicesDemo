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
        'Accept-Language': lang
      })
    };

    return this.http.post("http://127.0.0.3:3000/register", data, this.httpOptions );
  }
}
