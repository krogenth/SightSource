import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from "../json.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<JSON> = [];

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
