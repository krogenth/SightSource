import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  slide=[{image: './assets/images/cali.jpg',text:'First'},
  {image: './assets/images/alaska.jpg',text:'Second'}];
  showIndicators=true;
  
  constructor() { }
  ngOnInit(): void {
  }

}
