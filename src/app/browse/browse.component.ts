import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { JsonService } from "../json.service";

import { Country } from "../types/country";
import {Tour} from "../types/tour";


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  providers: [
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: false, insideClick:true } }
 ],
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  tours: Tour[] = [];
  countries: Country[] = [];
  items:any=[];
  allSelected:boolean;
  checked:any;
  

  constructor(private json: JsonService) {
    
    this.allSelected = false;

    json.getData('assets/json/landing.json').subscribe(result => {
      
      for(let i in result){
        this.items.push(
          {id:result[i].id,
            value: result[i].name,
          selected:false}
          );
        for(let j in result[i].tours){
          this.tours.push(result[i].tours[j]);
        }
      }
      console.log(this.items);
    });
    this.getCheckedItems();


  }
  getCheckedItems(){
    this.checked = [];
    for (let i in this.items) {
      if(this.items[i].selected)
      this.checked.push(this.items[i]);
    }
    this.checked = JSON.stringify(this.checked);
  }

  checkOrUncheckAll() {
    for (let i in this.items) {
      this.items[i].selected = this.allSelected;
    }
    this.getCheckedItems();
  }

  areAllSelected() {
    this.allSelected = this.items.every(function(item:any) {
        return item.selected == true;
      })
    this.getCheckedItems();
  }

  ngOnInit(): void {
  }

}
