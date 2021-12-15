import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

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
  tours: Tour[] = [] as Tour[];
  allTours: Tour[] = [] as Tour[];
  countries: Country[] = [] as Country[];
  items: any = [] as any[];
  allSelected: boolean;
  checked: any;
  min: any;
  max: any;
  searchVal:string='';
  

  constructor(private json: JsonService, private actRoute: ActivatedRoute, private currencyPipe: CurrencyPipe) {
    this.allSelected = true;
    this.min=0;
    this.max=99999;

    json.getData('assets/json/landing.json').subscribe(result => {
      let countrId = this.getQueryParams("countryId");
      if(parseInt(countrId, 10) >= 0) {
        this.allSelected = false;
        for(let i in result){
            this.items.push({
                id: result[i].id,
                value: result[i].name,
                selected: (result[i].id === countrId) ? true : false
              });
            
            for(let j in result[i].tours) {
              this.allTours.push(result[i].tours[j]);
            }
        }
      } else {
        for(let i in result){
          this.items.push({
              id: result[i].id,
              value: result[i].name,
              selected: true
            });
          for(let j in result[i].tours) {
            this.allTours.push(result[i].tours[j]);
          }
        }
      }
      this.getCheckedItems();
    });
  }

  getQueryParams(paramName:string): string {
    return (this.actRoute.snapshot.queryParamMap.get(paramName) || "-1");
  }

  ngOnInit(): void {
  }

  getFormattedPrice(price: number): string | null {
    return this.currencyPipe.transform(price, '$');
  }

  getCheckedItems(): void {
    console.log(this.getQueryParams("searchVal"));
    this.checked = [];
    this.tours=[];
    let countrySearched=true;
    for (let i in this.items) {
      if(this.items[i].selected) {
        this.getQueryParams("searchVal")==="-1"? countrySearched=true:countrySearched=(this.items[i].value.search(RegExp("("+this.getQueryParams("searchVal")+")+"))!=-1);
        this.checked.push(this.items[i]);
        this.allTours.filter(tour=>
            tour.countryId == this.items[i].id &&
            tour.price >= this.min &&
            tour.price <= this.max &&
            ((this.getQueryParams("searchVal")==="-1"?
            true:(tour.tour.search(RegExp("("+this.getQueryParams("searchVal")+")+"))!=-1 ))||countrySearched)

          ).forEach(element => {
            this.tours.push(element);
          });
      }
    }
    this.checked = JSON.stringify(this.checked);
  }

  checkOrUncheckAll(): void {
    for (let i in this.items) {
      this.items[i].selected = this.allSelected;
    }
    this.getCheckedItems();
  }

  areAllSelected(): void {
    this.allSelected = this.items.every(function(item:any) {
        return item.selected == true;
      })
    this.getCheckedItems();
  }
}
