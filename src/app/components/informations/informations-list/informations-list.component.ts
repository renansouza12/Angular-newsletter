import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-informations-list',
  templateUrl: './informations-list.component.html',
  styleUrls: ['./informations-list.component.scss']
})
export class InformationsListComponent {
  @Input() informationList:string[] = [];
}
