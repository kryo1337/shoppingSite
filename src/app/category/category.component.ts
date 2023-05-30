import { Component,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

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