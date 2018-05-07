import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  cin: string;
  email: string;
  phone: string;
  isDisabled: boolean = true;
  
  constructor() { }

  ngOnInit() {
    this.username = "Bouarada Seifedine";
    this.cin = "07444955";
    this.email = "seif_bouarada@outlook.com";
    this.phone = "94332127";
  }

  disabled (){
    if(this.isDisabled){
      this.isDisabled = false;
    }
    else{
      this.isDisabled = true;
    }
    
  }

}
