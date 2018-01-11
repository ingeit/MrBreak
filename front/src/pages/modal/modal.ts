import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  public parametros: any;
  public teclas: any[];
  public pagaCon: any;
  public vuelto: any;
  public ventaToMysql: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.teclas = new Array();
    this.pagaCon = "0";
    this.vuelto = "0";
    this.teclas.push(1,2,3,4,5,6,7,8,9,0,".");
    this.parametros = navParams.get('parametros');
    this.ventaToMysql = '';
    console.log('lineasdeVentaModal', navParams.get('parametros'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  clickPad(tecla){
    if(this.pagaCon === '0'){
      this.pagaCon = '';
    }
    if(tecla !== 'borrar'){
      this.pagaCon = this.pagaCon.concat(tecla);
    }else{
      this.pagaCon = this.pagaCon.slice(0, -1);
    }

    if(parseFloat(this.pagaCon) > parseFloat(this.parametros.totalVenta)){
      this.vuelto = parseFloat(this.pagaCon) - parseFloat(this.parametros.totalVenta);
    }
  }

  cobrarVenta(){
    for(let lineaVenta of this.parametros.lineasDeVenta){
      this.ventaToMysql = this.ventaToMysql.concat(lineaVenta.idProducto);
      this.ventaToMysql = this.ventaToMysql.concat('|');
      this.ventaToMysql = this.ventaToMysql.concat(lineaVenta.cantidad);
      this.ventaToMysql = this.ventaToMysql.concat('*');
    }
    console.log(this.ventaToMysql);
  }

  cancelar(){
    this.viewCtrl.dismiss();
  }

}
