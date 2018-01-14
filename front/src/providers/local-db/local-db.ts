import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import PouchDB from 'pouchdb';
import 'rxjs/add/operator/map';
import * as configServer from './../../server';

 
@Injectable()
export class LocalDbProvider {
 
  public lineaVentaToMysql: any;
  public montoTotalVentaToMysql: any;
  data: any;
  db: any;
  remote: any;
 
  constructor(public http: Http,) {
    this.db = new PouchDB('MrBreak'); 
  }
 
  mostrarVentas() {
    console.log("mostrarVentas!");  
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
    todo.fecha = fechaString;
    console.log(todo)
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
  console.log(mes)
  return (fecha.getFullYear() + "-" + mes + "-" + fecha.getDate() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

subirVentas() {
  console.log("subirVentas!");  
  return new Promise((resolve,reject) => {
    this.db.allDocs({include_docs: true}).then((res) => {
      this.data = [];
      let docs = res.rows.map((row) => {
        this.data.push(row.doc);
      });
      for(let venta of this.data){
        let parametros = this.armarParametros(venta);
        this.ventaAMysql(parametros).then((res) => {
          this.eliminarVenta(venta);
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      }
      resolve(this.data);
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });   
}

armarParametros(venta){
  this.lineaVentaToMysql = new String;
  for(let i = 0; i< venta.lineasDeVenta.length ; i++){
    this.lineaVentaToMysql = this.lineaVentaToMysql.concat(venta.lineasDeVenta[i].idProducto);
    this.lineaVentaToMysql = this.lineaVentaToMysql.concat('|');
    this.lineaVentaToMysql = this.lineaVentaToMysql.concat(venta.lineasDeVenta[i].cantidad);
    this.lineaVentaToMysql = this.lineaVentaToMysql.concat('|');
    this.lineaVentaToMysql = this.lineaVentaToMysql.concat(venta.lineasDeVenta[i].precio);
    this.lineaVentaToMysql = this.lineaVentaToMysql.concat('*');    
  }
  // A mysql le mandamos al SP los parametros (venta.totalVenta, lineaVentaToMysql)
  
  return [venta.totalVenta,this.lineaVentaToMysql];
}

ventaAMysql(parametros){
  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let credentials = {
      montoTotal: parametros[0],
      cadena: parametros[1],
    };
    console.log(credentials);
    this.http.post(`${configServer.data.urlServidor}/api/ventaNuevaMRBREAK/`, JSON.stringify(credentials), {headers: headers})
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      resolve(res);
    }, (err) => {
      console.log(err);
      reject(err);
    });
  });
}

eliminarVenta(venta){
  this.db.remove(venta).then((res)=>{
    console.log(res);
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