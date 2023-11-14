import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showLogIn:boolean = true;//change after
  displayMessage:boolean =  false;

  emailValidated():void{
    this.showLogIn = false;
    this.displayMessage = true;
  }
  dimissMessage():void{
    this.showLogIn = true;
    this.displayMessage = false;
  }
}
