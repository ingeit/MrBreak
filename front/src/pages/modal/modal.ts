import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navParams: NavParams) {
    console.log('lineasdeVentaModal', navParams.get('lineasDeVenta'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
