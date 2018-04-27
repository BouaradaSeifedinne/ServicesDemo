import { Component, OnInit } from '@angular/core';
import { SendmailService } from '../../../providers/sendmail.service';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private sendmail:SendmailService, private http:HttpClient, private translate: TranslateService) { 
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

  Send() {
    let data = {
      to: this.sendEmail,
      subject: this.sendSubject,
      html: this.sendMessage
    };

    this.sendmail.sendmail(data, this.translate.currentLang).subscribe(data => {
      console.log(data);
    }); 
  }

}
