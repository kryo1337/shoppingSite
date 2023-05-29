import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CartService } from '../cart/services/CartServices.service';


@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements AfterViewInit {
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
