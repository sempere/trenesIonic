import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrenesService {

  constructor(private fireStore: AngularFirestore) { }

  public getTrenes() {
    return this.fireStore.collection("trenes", ref => ref.where("id", "==", "tren1"))
    .valueChanges();
  }
}