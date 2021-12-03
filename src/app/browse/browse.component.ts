import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ActivatedRoute } from '@angular/router';
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
  allTours: Tour[] = [];
  countries: Country[] = [];
  items:any=[];
  allSelected:boolean;
  checked:any;
  

  constructor(private json: JsonService, private actRoute: ActivatedRoute) {
    
    this.allSelected = false;

    json.getData('assets/json/landing.json').subscribe(result => {
      

      if(this.actRoute.snapshot.params.countryid){
        for(let i in result){
          
            this.items.push(
              {id:result[i].id,
              value: result[i].name,
              selected:result[i].id===this.actRoute.snapshot.params.countryid?true:false}
            );
              
              for(let j in result[i].tours){
                this.allTours.push(result[i].tours[j]);
              }
            
        }
        
      }
      else
      {
        for(let i in result){
          this.items.push(
            {id:result[i].id,
              value: result[i].name,
            selected:false}
            );
          for(let j in result[i].tours){
            this.allTours.push(result[i].tours[j]);
          }
        }
      }
    });
    this.getCheckedItems();


  }
  getCheckedItems(){
    this.checked = [];
    this.tours=[];
    for (let i in this.items) {
      if(this.items[i].selected){
        this.checked.push(this.items[i]);
        this.allTours.filter(tour=>tour.countryId==this.items[i].id).forEach(element => {
          this.tours.push(element);
        });
      }
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
