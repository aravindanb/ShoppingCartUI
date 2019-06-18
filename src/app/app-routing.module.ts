import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'productdetails/:productId', component: ProductDetailComponent },
  { path: 'productcatalogue', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/productcatalogue', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
