import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { JsonService } from "../json.service";

import { Country } from "../types/country";
import { Tour } from "../types/tour";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  tour: Tour = {} as Tour;

  constructor(private json: JsonService, private actRoute: ActivatedRoute, private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    let tourid = this.actRoute.snapshot.params.tourid;
    console.log(tourid);
    this.json.getData('assets/json/landing.json').subscribe(result => {
      for(let country in result) {
        for(let tour in result[country].tours) {
          if(result[country].tours[tour].id === tourid) {
            this.tour = result[country].tours[tour];
            console.log(this.tour);
          }
        }
      }
    });
  }

  getFormattedPrice(price: number) {
    return this.currencyPipe.transform(price, '$');
  }

  addItemToCart(): void {
    debugger;
    let cart = localStorage.cart ? JSON.parse(localStorage.cart) as Tour[] : [] as Tour[];
    if(!cart.find(element => element.id === this.tour.id)) {
      cart.push(this.tour);
    }
    localStorage.cart = JSON.stringify(cart);
  }

}
