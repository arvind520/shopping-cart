import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { productsUrl, wishlistUrl } from '../config/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any) => {
        // console.log(Array.isArray(result));
        let productIds: number[] = [];

        for (let i = 0; i < result.length; i++) {
          productIds.push(result[i].id);
        }

        return productIds;
      })
    );
  }

  addToWishlist(productId: number) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeFromWishlist(productId: number) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
