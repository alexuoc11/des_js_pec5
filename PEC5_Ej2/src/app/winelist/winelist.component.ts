import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { Wine } from '../model/wine';
import { WineQuantityChange } from '../wine-quantity-change';
import { WineitemComponent } from '../wineitem/wineitem.component';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public list: Wine[] = [];

  constructor() {
    this.list[0] = new Wine(1, "Vino 1", "https://www.bodasoutlet.es/7969-large_default/botellas-de-vino-para-regalar-375-ml.jpg",12,true,1,[]);
    this.list[1] = new Wine(2, "Vino 2", "https://www.decantalo.com/uk/45033/vinas-elias-mora.jpg",16,false,1,[]);
    this.list[2] = new Wine(3, "Vino 3", "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201610/11/00118738800616____2__600x600.jpg",23,true,1,[]);
  }

  ngOnInit(): void {

  }

  update(quantity: WineQuantityChange) {
    this.list.forEach(function (wine) {
        if(quantity.wine.id == wine.id){
          if(quantity.mode == '+'){
            console.log(wine.quantityInCart);
            wine.quantityInCart = wine.quantityInCart + 1;
            console.log(wine.quantityInCart);
          }else if(quantity.mode == '-'){
            console.log(wine.quantityInCart);
            wine.quantityInCart = wine.quantityInCart - 1;
            console.log(wine.quantityInCart);
          }
        }
      }
    );
  }

}
