import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartValue: number = 0;
  cartValueUpdated: Subject<number> = new Subject<number>();

  constructor() {
    this.cartValue = parseInt(localStorage.getItem('cartValue') || '0');
  }

  getCartValue(): number {
    return this.cartValue;
  }

  setCartValue(value: number): void {
    this.cartValue = value;
    this.cartValueUpdated.next(this.cartValue);
    localStorage.setItem('cartValue', this.cartValue.toString());
  }
}
