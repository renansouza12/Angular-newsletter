import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformationsComponent } from './components/informations/informations.component';
import { InformationsListComponent } from './components/informations/informations-list/informations-list.component';
import { InformationsTitleComponent } from './components/informations/informations-title/informations-title.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationsComponent,
    InformationsListComponent,
    InformationsTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
