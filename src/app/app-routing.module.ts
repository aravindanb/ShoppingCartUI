import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'productdetails/:productId', component: ProductDetailComponent },
  { path: 'productcatalogue', component: ProductListComponent },
  { path: 'shoppingcart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/productcatalogue', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
