import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLogIn:boolean = false;//change after
  displayMessage:boolean =  true;

  emailValidated():void{
    this.showLogIn = false;
    this.displayMessage = true;
  }
}
