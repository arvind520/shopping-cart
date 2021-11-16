import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    //TODO: map the obtain cartItems result to a CartItem model. (pipe and map)

    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          // console.log(item.product);
          let flag = 0;
          if (cartItems.length != 0) {
            cartItems.forEach((element: any) => {
              // console.log(element.productId == product.id);
              if (element.productId == item.product.id) {
                element['qty'] = element.qty + 1;
                flag = 1;
              }
            });
          }

          if (flag == 0) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
