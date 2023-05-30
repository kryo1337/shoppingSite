import { Component ,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CartService } from '../cart/services/CartServices.service';

@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.css']
})
export class Category4Component {
  addToCart(): void {
    const priceText = document.querySelector('#price')?.textContent;
    if (priceText) {
      const price = parseInt(priceText);
      const cartValue = localStorage.getItem('cartValue') || '0';
      const currentValue = parseInt(cartValue);
      const updatedValue = currentValue + price;
  
      localStorage.setItem('cartValue', updatedValue.toString());
    }
  }
}
