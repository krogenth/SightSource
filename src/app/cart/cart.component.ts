import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from "../json.service";
import { Tour } from "../types/tour";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Tour[] = [];

  constructor(private json: JsonService) {
    json.getData('assets/json/cart.json').subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  ngOnInit(): void {
  }

  getItems(): any {
    return this.items;
  }

}
