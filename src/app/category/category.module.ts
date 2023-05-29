import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CategoryModule { }

/*
addToCart(): void {
  if (this.priceElement) {
    const price = parseInt(this.priceElement.nativeElement.textContent || '0');
    console.log(price.toString());
    const cartValue = 'Wartość koszyka: ' + price.toString() + 'zł';
    this.cartService.setCartValue(cartValue);
    localStorage.setItem('cartValue', price.toString());
  }
}
*/