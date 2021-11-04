import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ArgumentOutOfRangeError } from 'rxjs';
import { JsonService } from "../json.service";
import { Tour } from "../types/tour";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Tour[] = [];

  constructor(private json: JsonService, private currencyPipe: CurrencyPipe) {
    json.getData('assets/json/cart.json').subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  ngOnInit(): void {
  }

  getItems(): Tour[] {
    return this.items;
  }

  getFormattedPrice(price: number) {
    return this.currencyPipe.transform(price, '$');
  }

  getItemsTotal(): number {
    let total: number = 0.00;
    for (let item of this.items) {
      total = +total + +item.price;
    }
    return total;
  }

}
