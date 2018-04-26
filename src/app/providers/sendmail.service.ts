import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SendmailService {

  httpOptions:object;

  constructor(private http:HttpClient) { }

  sendmail (data:object , lang:string ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept-Language': lang
      })
    };

    console.log(data);
    
    return this.http.post("http://56413105.ngrok.io/sendmail", data, this.httpOptions);
    
  }

}