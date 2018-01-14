import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { Producto } from '../../modelos/producto';
import { ModalPage } from '../modal/modal';
import { Network } from '@ionic-native/network';
import { LocalDbProvider } from '../../providers/local-db/local-db';

/**
 * Generated class for the GrillaVentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-grilla-venta',
  templateUrl: 'grilla-venta.html',
})
export class GrillaVentaPage {
  public producto: Producto;
  public listaProductos: Producto[]; 
  public lineasDeVenta:any[];
  public totalVenta: number;
  public respuestaPouchDB: any;
  public conexion: any;
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private menu: MenuController,
    public localDB: LocalDbProvider,
    private network: Network
    ){
      this.listaProductos = new Array();
      this.lineasDeVenta = new Array();
      this.totalVenta = 0;
      // this.totalVenta = this.lineasDeVenta.map(lv => )
      for(let i=1;i<36;i++){ 
        this.producto = new Producto(i,'T. Jamon/Salame + LicuadoAPruebaDeAgua',this.precioRandom(),"base64:asdadsad");
        // if(this.producto.nombre.length > 26){
        //   this.producto.nombre = this.producto.nombre.slice(0,25) + '...';
        // }
        this.listaProductos.push(this.producto);
      }


      this.listaProductos[3].nombre = "asd";
      this.producto = new Producto(36,"hola",33.33,"chau");
      this.listaProductos.push(this.producto);
      console.log("producto ",this.producto);
      console.log("nombre producto ",this.producto.nombre);
      console.log("lista producto ",this.listaProductos);
    }

  ionViewDidEnter() {
    this.chequearConexion();
  }

  precioRandom(){
    var min = 1.00,
    max = 99.99,
    aleatorio = Math.random() * (max - min) + min;
    aleatorio = this.truncarPrecio(aleatorio);

    return aleatorio;
  }
 
  truncarPrecio(precios){
    return (Math.round(precios*100) / 100);
  }

  clickProducto(p){
    // Vemos si en alguna linea de venta existe el mismo producto para solo sumar la cantidad
    let linea;
    let coincidencia = this.lineasDeVenta.map(prod => prod.idProducto).indexOf(p.idProducto);
    if(coincidencia === -1){ // igual a -1 quiere decir que no hay coincidencia
      let linea = {
        idProducto: p.idProducto,
        nombre: p.nombre,
        precio: p.precio,
        cantidad: 1
      }
      this.lineasDeVenta.push(linea);
    }else{
      this.lineasDeVenta[coincidencia].cantidad++;
    }
    this.totalVenta = this.totalVenta + p.precio;
    this.totalVenta = this.truncarPrecio(this.totalVenta);

    console.log(this.totalVenta)
    console.log(this.lineasDeVenta);

  }

  eliminarCantidad(lv){
    if(lv.cantidad > 1){
      lv.cantidad--;
    }else{
      let coincidencia = this.lineasDeVenta.map(prod => prod.idProducto).indexOf(lv.idProducto);
      this.lineasDeVenta.splice(coincidencia,1);
    }
    this.totalVenta = this.totalVenta - lv.precio;
    this.totalVenta = this.truncarPrecio(this.totalVenta);
    console.log(this.lineasDeVenta);
  }

  cobrar(){
    let parametros = {
      lineasDeVenta: this.lineasDeVenta,
      totalVenta: this.totalVenta
    }
    let modal = this.modalCtrl.create(ModalPage, {parametros: parametros}, {showBackdrop: true, enableBackdropDismiss: true});
    modal.present();
  }

  mostrarVentas(){
    this.localDB.mostrarVentas().then((res)=>{
      // this.loading.dismiss();
      this.respuestaPouchDB = res;
      console.log("respuesta pouch", this.respuestaPouchDB)
    }).catch((err) => {
      console.log("error pouch",err);
    });
  }

  subirVentas(){
    this.localDB.subirVentas().then((res)=>{
      console.log(res)
      // this.loading.dismiss();
      if(res === 1){
        console.log("codigo 1")
      }else{
        console.log("codigo distinto de uno")
      }
      this.respuestaPouchDB = res;
    }).catch((err) => {
      console.log("error pouch",err);
    });
  }

  eliminarDB(){
    this.localDB.eliminarDB().then((res)=>{
      // this.loading.dismiss();
      this.respuestaPouchDB = res;
      console.log("respuesta pouch", this.respuestaPouchDB)
    }).catch((err) => {
      console.log("error pouch",err);
    });
  }

  chequearConexion(){

    this.network.onDisconnect().subscribe(() => {
      this.conexion = 0;
      console.log(this.network.type)
      console.log(this.conexion);
    });

    this.network.onConnect().subscribe(() => {
      this.conexion = 1;
      console.log(this.conexion);
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
    });

  }

}
