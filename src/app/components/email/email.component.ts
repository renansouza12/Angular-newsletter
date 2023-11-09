import { Component ,Input, OnInit} from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit{
  emailValid!:string;
  momentForm!:FormGroup

  ngOnInit(): void {
      this.momentForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')], ),
      })
  }

  get email(){
    return this.momentForm.get('email')!;
  }

  submit(){
    if(this.momentForm.invalid){
    this.emailValid = "invalid"
;      return 
    }
    
  }

}
