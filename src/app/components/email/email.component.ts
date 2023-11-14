import { Component , OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit{  
  emailValid!:string;
  momentForm!:FormGroup;
  emailValue!:string;
  
  @Output() emailValidated = new EventEmitter<boolean>();


  ngOnInit(): void {
      this.momentForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')], ),
      })

  }

  get email(){
   
    return this.momentForm.get('email')!;
  }

  constructor(private sharedService: SharedService){}

  submit(){
    
    if(this.momentForm.invalid){
      this.emailValid = "invalid";      
      return 
    }else{
      this.emailValid = "";    
      this.emailValidated.emit(true);
      this.sharedService.setInputValue(this.emailValue);
    }
    
  }
  

}
