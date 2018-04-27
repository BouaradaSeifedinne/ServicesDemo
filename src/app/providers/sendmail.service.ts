import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SendmailService {

  httpOptions:object;

  constructor(private http:HttpClient) { }

  sendmail (data:object , lang:string ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': lang
      })
    };
    
    return this.http.post("http://127.0.0.1:3000/sendmail", data, this.httpOptions);
    
  }

}
