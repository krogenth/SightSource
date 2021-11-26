//  angular imports
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

//landing imports
import {CarouselModule} from "ngx-bootstrap/carousel";

//browse imports
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { BrowseComponent } from './browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LandingComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
