import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
