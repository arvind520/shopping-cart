import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; //! helps to tiggers and listen something   STEP 1
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject(); //! STEP 2: creating instances of the Subject

  constructor() {}

  sendmsg(product: Product) {
    // console.log(product);
    this.subject.next(product); //! STEP 3: triggering an event and passing an object
  }

  getmsg() {
    return this.subject.asObservable(); //! STEP  4: getting that product
  }
}
