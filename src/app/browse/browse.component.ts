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
  countries:Country[]=[];
  constructor(private json: JsonService) {
    json.getData('assets/json/landing.json').subscribe(result => {
      for(var i in result){
        for(var j in result[i].tours){
          console.log(result[i].tours[j]);
          this.tours.push(result[i].tours[j]);
        }
      }
    })
    console.log(this.tours);
    
  }


  ngOnInit(): void {
  }

}
