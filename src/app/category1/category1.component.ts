import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CartService } from '../cart/services/CartServices.service';


@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component{
  addToCart(): void {
    const priceText = document.querySelector('#price')?.textContent;
    if (priceText) {
      const price = parseInt(priceText);
      const cartValue = localStorage.getItem('cartValue') || '0';
      const currentValue = parseInt(cartValue);
      const updatedValue = currentValue + price;
  
      localStorage.setItem('cartValue', updatedValue.toString());
      localStorage.setItem('cartItems', "Koszulka RED \n")
    }
  }
}
