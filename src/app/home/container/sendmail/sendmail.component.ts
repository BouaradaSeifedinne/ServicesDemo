import { Component, OnInit } from '@angular/core';
import { SendmailService } from '../../../providers/sendmail.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css'],
  providers:[SendmailService]
})
export class SendmailComponent implements OnInit {

  sendEmail:string;
  sendSubject:string;
  sendMessage:string;

  constructor(private sendmail:SendmailService, private http:HttpClient) { }

  ngOnInit() {
  }

  Send() {
    let data = {
      to: this.sendEmail,
      subject: this.sendSubject,
      html: this.sendMessage
    };

    this.sendmail.sendmail(data, "fr").subscribe(data => {
      console.log(data);
    }); 
  }

}
