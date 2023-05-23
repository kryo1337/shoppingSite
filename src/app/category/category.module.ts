import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CategoryComponent } from './category.component';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
