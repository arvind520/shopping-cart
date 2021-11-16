import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Product 1',
      'This is the product 1 description. The product is really cool!',
      100
    ),
    new Product(
      2,
      'Product 2',
      'This is the product 2 description. The product is really cool!',
      150
    ),
    new Product(
      3,
      'Product 3',
      'This is the product 3 description. The product is really cool!',
      50
    ),
    new Product(
      4,
      'Product 4',
      'This is the product 4 description. The product is really cool!',
      200
    ),
    new Product(
      5,
      'Product 5',
      'This is the product 5 description. The product is really cool!',
      175
    ),
    new Product(
      6,
      'Product 6',
      'This is the product 6 description. The product is really cool!',
      225
    ),
    new Product(
      7,
      'Product 7',
      'This is the product 7 description. The product is really cool!',
      100
    ),
    new Product(
      8,
      'Product 8',
      'This is the product 8 description. The product is really cool!',
      100
    ),
  ];

  constructor(private http: HttpClient) {}

  //TODO: populate products from api and return an observable

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl); //! this will return observable and we have to put data type to that observable
  }
}
