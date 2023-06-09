import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CartService } from '../cart/services/CartServices.service';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.css']
})
export class Category3Component {
  addToCart(): void {
    const priceText = document.querySelector('#price')?.textContent;
    if (priceText) {
      const price = parseInt(priceText);
      const cartValue = localStorage.getItem('cartValue') || '0';
      const currentValue = parseInt(cartValue);
      const updatedValue = currentValue + price;
  
      localStorage.setItem('cartValue', updatedValue.toString());

      const currentItems = localStorage.getItem('cartItems') || '';
      const updateItems = currentItems + "Spodnie dresowe, \n";
      localStorage.setItem('cartItems', updateItems);
    }
  }
}
