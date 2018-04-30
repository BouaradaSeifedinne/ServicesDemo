import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SendmailService } from '../../../providers/sendmail.service';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

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

  constructor(private sendmail:SendmailService, private http:HttpClient, private translate: TranslateService, public toastr: ToastsManager, vcr: ViewContainerRef, private route:Router) { 
    
    //TransaleModule INIT
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    
    //ToastModule INIT
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  Send() {
    let data = {
      to: this.sendEmail,
      subject: this.sendSubject,
      html: this.sendMessage
    };

    this.sendmail.sendmail(data, this.translate.currentLang).subscribe(
      res => {
        let array = Object.values(res);
        this.toastr.success(array[0], 'Success!');
      }, 
      error => {
        console.log(error);
    }); 
  }

}
