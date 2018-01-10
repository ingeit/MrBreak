import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public productos:any= [];

  
  constructor(public navCtrl: NavController) {
    for(let i=0;i<36;i++){ 
      let prodTemp = {id:i,name: 'T. Jamon/Salame + LicuadoAPruebaDeAgua'};
      if(prodTemp.name.length > 26){
        prodTemp.name = prodTemp.name.slice(0,25) + '...';
      }
      this.productos.push(prodTemp);
    }
  }

}
