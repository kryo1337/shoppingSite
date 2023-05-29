import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CartService } from '../cart/services/CartServices.service';
@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements AfterViewInit {
  @ViewChild('priceElement', { static: false }) priceElement!: ElementRef;

  constructor(private cartService: CartService) {}

  ngAfterViewInit(): void {
    if (this.priceElement) {
      const price = parseInt(this.priceElement.nativeElement.textContent || '0');
      console.log(price.toString());
    }
  }

  addToCart(): void {
    if (this.priceElement) {
      const price = parseInt(this.priceElement.nativeElement.textContent || '0');
      console.log(price.toString());
      const cartValue = price;
      this.cartService.setCartValue(cartValue);
    }
  }
}