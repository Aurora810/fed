import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquadreComponent } from './squadre/squadre.component';
import { ComponentiComponent } from './componenti/componenti.component';

@NgModule({
  declarations: [
    AppComponent,
    SquadreComponent,
    ComponentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
