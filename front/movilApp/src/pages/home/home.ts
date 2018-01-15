import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { Producto } from '../../modelos/producto';
import { ModalPage } from '../modal/modal';
import { LocalDbProvider } from '../../providers/local-db/local-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public producto: Producto;
  public listaProductos: Producto[]; 
  public lineasDeVenta:any[];
  public totalVenta: number;
  public respuestaPouchDB: any;
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private menu: MenuController,
    public localDB: LocalDbProvider
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

  precioRandom(){
    var min = 1.00,
    max = 99.99,
    aleatorio = Math.random() * (max - min) + min;
    aleatorio = this.truncarPrecios(aleatorio);

    return aleatorio;
  }

  truncarPrecios(precios){
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
    this.totalVenta = this.truncarPrecios(this.totalVenta);

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
    this.totalVenta = this.truncarPrecios(this.totalVenta);
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
      // this.loading.dismiss();
      this.respuestaPouchDB = res;
      console.log("respuesta pouch", this.respuestaPouchDB)
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

}
