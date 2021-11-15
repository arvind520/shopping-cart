import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //TODO: populate products from api and return an observable

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl); //! this will return observable and we have to put data type to that observable
  }
}
