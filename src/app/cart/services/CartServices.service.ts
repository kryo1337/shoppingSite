import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cartValue: number = 0;
    cartValueUpdated: Subject<number> = new Subject<number>();
  
    getCartValue(): number {
      return this.cartValue;
    }
  
    setCartValue(value: number): void {
      this.cartValue = value;
      this.cartValueUpdated.next(this.cartValue);
    }
}
