import { Component, OnInit } from '@angular/core';
import { CartService } from './services/CartServices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartValue: string;

  constructor(private cartService: CartService) {
    this.cartValue = '';
  }

  ngOnInit(): void {
    this.getCartValue();
    this.cartService.cartValueUpdated.subscribe((value: number) => {
      this.cartValue = value.toString();
    });
  }

  getCartValue(): void {
    this.cartValue = this.cartService.getCartValue().toString();
  }
  
  redirectToFinalization(): void {
    window.location.href = './finalization';
  }
}
