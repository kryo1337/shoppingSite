import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SignInComponent } from './signin/signin.component';
import { FinalizationComponent } from './finalization/finalization.component';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { Category4Component } from './category4/category4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'koszyk', component: CartComponent },
  { path: 'kategoria', component: CategoryComponent },
  { path: 'kategoria1', component: Category1Component },
  { path: 'kategoria2', component: Category2Component },
  { path: 'kategoria3', component: Category3Component },
  { path: 'kategoria4', component: Category4Component },
  { path: 'signin', component: SignInComponent },
  { path: 'finalization', component: FinalizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
