import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
 
@Injectable()
export class LocalDbProvider {
 
  data: any;
  db: any;
  remote: any;
 
  constructor() {
    this.db = new PouchDB('MrBreak'); 
  }
 
  getTodos() {
    console.log("getTodos!");
     if (this.data) {
      return Observable.create(observer => {
            observer.next(this.data);
        });
    }
   
  return Observable.create(observer => {    
    this.db.allDocs({
 
      include_docs: true
 
    }).then((result) => {
      console.log(result);
      this.data = [];
 
      let docs = result.rows.map((row) => {
        this.data.push(row.doc);
      });
 
      observer.next(this.data);
 
      this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
        this.handleChange(change);
        observer.next(this.data);
      });
 
    }).catch((error) => {
 
      console.log(error);
 
    }); 
 
  });
 
  }
 
crearVenta(todo){
  return new Promise((resolve, reject) => {
    this.db.post(todo).then((res) => {resolve(res)}).catch((err) => { reject(err)});
  });
  
}
 
updateTodo(todo){
  this.db.put(todo).catch((err) => {
    console.log(err);
  });
}
 
deleteTodo(todo){
  this.db.remove(todo).catch((err) => {
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