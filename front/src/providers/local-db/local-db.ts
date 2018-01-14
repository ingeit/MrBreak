import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import PouchDB from 'pouchdb';
import 'rxjs/add/operator/map';
import * as configServer from './../../server';

 
@Injectable()
export class LocalDbProvider {

  public montoTotalVentaToMysql: any;
  data: any;
  db: any;
  remote: any;
 
  constructor(public http: Http,) {
    this.db = new PouchDB('MrBreak'); 
  }
 
  mostrarVentas() { 
    return new Promise((resolve,reject) => {
      this.db.allDocs({include_docs: true}).then((res) => {
        this.data = [];
        let docs = res.rows.map((row) => {
          this.data.push(row.doc);
        });
        resolve(this.data);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    });   
  }

  
 
crearVenta(todo){
  return new Promise((resolve, reject) => {
    let fechaString = this.fechaFormatoMysql();
    todo.fechaVenta = fechaString;
    todo.idCarrito = 1;
    todo.idVendedor = 1;
    this.db.post(todo).then((res) => {
      resolve(res)
    }).catch((err) => { 
      reject(err)
    });
  });
}

fechaFormatoMysql(){
  let fecha = new Date();
  let mes = fecha.getMonth();
  mes++;
  return (fecha.getFullYear() + "-" + mes + "-" + fecha.getDate() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

subirVentas() { 
  return new Promise((resolve,reject) => {
    this.db.allDocs({include_docs: true}).then((res) => {
      this.data = [];
      let docs = res.rows.map((row) => {
        this.data.push(row.doc);
      });
      let cantidadVentas = this.data.length;
      for(let venta of this.data){
        let cadena = this.armarCadenaLV(venta);
        let parametros = {
          idCarrito: venta.idCarrito,
          idVendedor: venta.idVendedor,
          montoTotal : venta.totalVenta,
          cadena: cadena,
          fechaVenta: venta.fechaVenta
        }
        this.ventaAMysql(parametros).then((res) => {
          if(res[0].codigo !== 0 ){
            cantidadVentas--;
            this.eliminarVenta(venta);
          }
        }).catch((err) => {
          console.log(err);
        });
      }
      resolve(res);
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });   
}

armarCadenaLV(venta){
  let cadenaMYSQL = new String;
  for(let i = 0; i< venta.lineasDeVenta.length ; i++){
   cadenaMYSQL = cadenaMYSQL.concat(venta.lineasDeVenta[i].idProducto);
   cadenaMYSQL = cadenaMYSQL.concat('|');
   cadenaMYSQL = cadenaMYSQL.concat(venta.lineasDeVenta[i].cantidad);
   cadenaMYSQL = cadenaMYSQL.concat('|');
   cadenaMYSQL = cadenaMYSQL.concat(venta.lineasDeVenta[i].precio);
   cadenaMYSQL = cadenaMYSQL.concat('*');    
  }
  // A mysql le mandamos al SP los parametros (venta.totalVenta, lineaVentaToMysql)
  
  return cadenaMYSQL;
}

ventaAMysql(parametros){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(`${configServer.data.urlServidor}/api/ventaNuevaMRBREAK/`, JSON.stringify(parametros), {headers: headers})
    .map(res => res.json())
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      console.log(err);
      reject(err);
    });
  });
}

eliminarVenta(venta){
  this.db.remove(venta).then((res)=>{
  }).catch((err) => {
    console.log(err);
  });
}

eliminarDB() {
  return new Promise((resolve,reject) => {
    this.db.destroy().then((res) => {
      this.db = new PouchDB('MrBreak');
      resolve(res);
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });   
}
 
updateTodo(todo){
  this.db.put(todo).catch((err) => {
    console.log(err);
  });
}
 
  handleChange(change){

  let changedDoc = null;
  let changedIndex = null;
 
  this.data.forEach((doc, index) => {
 
    if(doc._id === change.id){
      changedDoc = doc;
      changedIndex = index;
    }
 
  });
 
  //A document was deleted
  if(change.deleted){
    this.data.splice(changedIndex, 1);
  } 

  else {
 
    //A document was updated
    if(changedDoc){
      this.data[changedIndex] = change.doc;
    } 
 
    //A document was added
    else {
      this.data.push(change.doc); 
    }
 
  }
 
  }
 
}