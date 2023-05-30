import { Component, OnInit } from '@angular/core';
import { CartService } from './services/CartServices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cartValue: string;

  constructor() {
    this.cartValue = '';
  }

  getCartValue(): void {
    const storedValue = localStorage.getItem('cartValue');
    if (storedValue) {
      this.cartValue = storedValue;
    } else {
      this.cartValue = '0';
    }
  }

  redirectToFinalization(): void {
    window.location.href = './finalization';
  }
}