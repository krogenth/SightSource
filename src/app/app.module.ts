//  angular imports
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  ngx-bootstrap imports
import { AlertModule } from "ngx-bootstrap/alert";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

//  app specific imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LandingComponent } from './landing/landing.component';
import { JsonService } from "./json.service";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    CurrencyPipe,
    BsDatepickerConfig,
    JsonService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
