import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrenesService {

  constructor(private fireStore: AngularFirestore) { }

  public hola que tal
}