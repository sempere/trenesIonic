import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrenesService {

  constructor(private fireStore: AngularFirestore) { }

  public getTrenes() {
    return this.fireStore.doc("trenes/tren1")
    .valueChanges();
  }

  public getTrenes1() {
    return this.fireStore.collection("trenes", ref => ref.where('$doc.id', '==','tren1'))
    .valueChanges();
  }

  public createData() {
    var data = {
      prueba : "Hola",
      campo1 : 3,
      campo2 : [{
        campo21: 3,
        campo22: "Mi amigo Pablo es un cara"
      },
      {
        campo21: 311,
        campo22: "Mi 33333 Pablo 3f3f3 un cara"
      }] 
    };
    return this.fireStore.collection('trenes').doc("tren1").set(data); 
  }
}