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
    this.items = localStorage.cart ? JSON.parse(localStorage.cart) as Tour[] : [] as Tour[];
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

  removeItem(id: number) {
    this.items = this.items.filter(tour => tour.id !== id);
    localStorage.cart = JSON.stringify(this.items);
  }

}
