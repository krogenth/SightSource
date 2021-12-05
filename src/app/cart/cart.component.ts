import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ArgumentOutOfRangeError } from 'rxjs';
import { JsonService } from "../json.service";
import { Item } from "../types/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[] = [];

  constructor(private json: JsonService, private currencyPipe: CurrencyPipe) {
    debugger;
    this.items = localStorage.cart ? JSON.parse(localStorage.cart) as Item[] : [] as Item[];
    this.items.forEach(elem => {
      elem.date = new Date(elem.date);
    });
  }

  ngOnInit(): void {
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

  setItemDate(item: Item, date: Date) {
    item.date = date;
  }

}
