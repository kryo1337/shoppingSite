import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin.component';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignInComponent
  ]
})
export class SigninModule { }
