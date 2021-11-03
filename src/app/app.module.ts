import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LandingComponent } from './landing/landing.component';

import { JsonService } from "./json.service";

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
  ],
  providers: [
    JsonService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
