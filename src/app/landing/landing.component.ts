import { Component, Input, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { JsonService } from "../json.service";
import { Country } from "../types/country";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  
  countries: Country[] = [];
  slide = ['./assets/images/cali.jpg', './assets/images/alaska.jpg'];
  map: string = './assets/images/map.png';
  showIndicators: boolean = true;

  constructor(private json: JsonService) {
    json.getData('assets/json/landing.json').subscribe(result => {
      this.countries = result;
    });
  }
  
  getItems(): Country[] {
    return this.countries;
  }
  

  ngOnInit(): void {
  }

}
