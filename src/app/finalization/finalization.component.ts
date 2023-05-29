import { Component } from '@angular/core';

@Component({
  selector: 'app-finalization',
  templateUrl: './finalization.component.html',
  styleUrls: ['./finalization.component.css']
})
export class FinalizationComponent {
  printData(): void {
    const full_name =
      'Imię: ' + (document.getElementById('name') as HTMLInputElement).value + '\n' +
      'Nazwisko: ' + (document.getElementById('surname') as HTMLInputElement).value + '\n' +
      'Adres: ' + (document.getElementById('address') as HTMLInputElement).value + '\n' +
      'Adres e-mail: ' + (document.getElementById('email') as HTMLInputElement).value + '\n' +
      'Numer karty: ' + (document.getElementById('card_num') as HTMLInputElement).value;
    console.log(full_name);
  }
}
