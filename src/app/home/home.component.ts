import { Component, OnInit } from '@angular/core';
import { AppService } from '../providers/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {

  location: boolean;

  constructor(private globalservice:AppService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.location = this.globalservice.getUrlInfo();
  }

}
