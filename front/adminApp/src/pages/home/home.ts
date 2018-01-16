import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {
      
  }

  imagen(evento){
    console.log(evento);
    let reader = new FileReader();
    let file = evento.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result.split(',')[1]
      console.log(base64);
    }    
  }

}
