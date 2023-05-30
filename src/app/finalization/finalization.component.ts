import { Component } from '@angular/core';
import { CartService } from '../cart/services/CartServices.service';

@Component({
  selector: 'app-finalization',
  templateUrl: './finalization.component.html',
  styleUrls: ['./finalization.component.css']
})
export class FinalizationComponent {
  cartValue: string;

  constructor(private cartService: CartService) {
    this.cartValue = '';
  }

  printData(): void {
    const full_name =
      'Imię: ' + (document.getElementById('name') as HTMLInputElement).value + '\n' +
      'Nazwisko: ' + (document.getElementById('surname') as HTMLInputElement).value + '\n' +
      'Adres: ' + (document.getElementById('address') as HTMLInputElement).value + '\n' +
      'Adres e-mail: ' + (document.getElementById('email') as HTMLInputElement).value + '\n' +
      'Numer karty: ' + (document.getElementById('card_num') as HTMLInputElement).value + '\n' +
      'Wartosc koszyka: ' + localStorage.getItem('cartValue');
    console.log(full_name);
    localStorage.setItem('cartValue', '0');
    alert("Zamówienie wysłane do realizacji!");
  }

  allFine(): void {
    
  }
}
