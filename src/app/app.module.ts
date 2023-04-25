import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { DarksectionComponent } from './darksection/darksection.component';
import { LightsectionComponent } from './lightsection/lightsection.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    DarksectionComponent,
    LightsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }