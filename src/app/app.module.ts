import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InformationsComponent } from './components/informations/informations.component';
import { InformationsListComponent } from './components/informations/informations-list/informations-list.component';
import { InformationsTitleComponent } from './components/informations/informations-title/informations-title.component';
import { EmailComponent } from './components/email/email.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationsComponent,
    InformationsListComponent,
    InformationsTitleComponent,
    EmailComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
