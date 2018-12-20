import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'productdetails/:id', component: ProductDetailComponent },
  { path: 'productcatalogue', component: ProductListComponent },
  { path: '', redirectTo: '/productcatalogue', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
