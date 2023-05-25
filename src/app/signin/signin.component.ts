import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authetication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent {
  constructor(private authService: AuthenticationService) {}

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}