import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-informations-title',
  templateUrl: './informations-title.component.html',
  styleUrls: ['./informations-title.component.scss']
})
export class InformationsTitleComponent {
  @Input() title!:string;
  @Input() description!:string;
}
