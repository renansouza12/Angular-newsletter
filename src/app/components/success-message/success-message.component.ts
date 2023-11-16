import { Component,Input, OnInit,Output,EventEmitter} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss','success-message.responsive.component.scss']
})
export class SuccessMessageComponent implements OnInit {
 @Input() successMessage!:boolean;
 @Input() userEmail!:string;

@Output()  dimissMessageEvent = new EventEmitter<string>()

 emailValue!:string;

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.sharedService.inputValue.subscribe((value)=>{
      this.emailValue = value;
      
    })
  }

  dimissMessage():void{
    this.dimissMessageEvent.emit();
  }
}
