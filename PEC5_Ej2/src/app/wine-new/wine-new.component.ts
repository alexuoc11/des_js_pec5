import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent implements OnInit {

  public wine: Wine;

  constructor() { 
    this.wine = new Wine(5, "Vino test", "https://www.pec5.com",16,false,1,[]);
  }

  ngOnInit(): void {
  }

  createWine(wineForm:any) {
    console.log("submit");
    console.log('Stock form', wineForm.value);
    if (wineForm.valid) {
      this.wine = wineForm.value;
      console.log('Creating stock ', this.wine);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }

}
