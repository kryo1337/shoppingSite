import { Component, OnInit } from '@angular/core';
import { CartService } from './services/CartServices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cartValue: string;
  cartItems: string;

  constructor() {
    this.cartValue = '';
    this.cartItems = '';
  }

  getCartValue(): void {
    const storedValue = localStorage.getItem('cartValue');
    const storedItems = localStorage.getItem('cartItems');
    if (storedValue) {
      this.cartValue = storedValue;
    } else {
      this.cartValue = '0';
    }
    if (storedItems) {
      this.cartItems = storedItems;
    } else {
      this.cartItems = '';
    }
  }

  redirectToFinalization(): void {
    window.location.href = './finalization';
  }
}