import { Component, Input, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { JsonService } from "../json.service";
import { Country } from "../types/country";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 6000, noPause: true, showIndicators: true } }
 ],
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  
  countries: Country[] = [];
  slides: any=[] as any[];
  showIndicators: boolean = true;

  constructor(private json: JsonService) {
    json.getData('assets/json/landing.json').subscribe(result => {
      this.countries = result;
      for(let i in result){
        for(let j in result[i].tours) {
          if(result[i].tours[j].popular){
          this.slides.push(result[i].tours[j]);
          }
        }
      }
    });
  }
  
  getItems(): Country[] {
    return this.countries;
  }
  

  ngOnInit(): void {
  }

}
