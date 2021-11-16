import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = [];

  cartTotal = 0;
  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //! Subscribe will add an eventListener to the cart component which will continuously listen to the event generated by messenger Service
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getmsg().subscribe((product: any) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    console.log('LoadCartItems');
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      // console.log(items);
      console.log(this.cartItems);
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item: any) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
