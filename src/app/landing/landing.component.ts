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

  constructor(private json: JsonService) {
    json.getData('assets/json/landing.json').subscribe(result => {
      this.countries = result;
    })
  }


  slide=[{image: './assets/images/cali.jpg',text:'First'},
  {image: './assets/images/alaska.jpg',text:'Second'}];

  map='./assets/images/map.png';
  showIndicators=true;
  getItems(): Country[] {
    return this.countries;
  }
  

  ngOnInit(): void {
  }

}
