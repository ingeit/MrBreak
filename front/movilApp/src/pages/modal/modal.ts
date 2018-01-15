import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GrillaVentaPage } from '../grilla-venta/grilla-venta';
import { LocalDbProvider } from '../../providers/local-db/local-db';

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
  public respuestaPouchDB: any;

  constructor(public navParams: NavParams, 
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public localDB: LocalDbProvider) {

    this.teclas = new Array();
    this.pagaCon = "0";
    this.vuelto = 0.00;
    this.teclas.push(1,2,3,4,5,6,7,8,9,0,".");
    this.parametros = navParams.get('parametros');
    this.ventaToMysql = '';
    console.log('lineasdeVentaModal', navParams.get('parametros'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  truncarPrecio(precio){
    return (Math.round(precio*100) / 100);
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
      this.vuelto = this.truncarPrecio(this.vuelto);
    }else{
      this.vuelto = 0.00;
    }
  }

  cobrarVenta(){
    this.viewCtrl.dismiss();
    this.localDB.crearVenta(this.parametros).then((res)=>{
      // this.loading.dismiss();
      console.log("respuesta pouch",res)
      this.respuestaPouchDB = res;
    }).catch((err) => {
      console.log("error pouch",err);
    });
    this.navCtrl.setRoot(GrillaVentaPage);
    console.log(this.ventaToMysql);
  }

  cancelar(){
    this.viewCtrl.dismiss();
  }

}
