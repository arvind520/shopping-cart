import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: any;

  constructor(private msg: MessengerService) {}

  handleAddToCart() {
    this.msg.sendmsg(this.productItem);
  }

  ngOnInit(): void {}
}
