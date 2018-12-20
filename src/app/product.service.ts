/**
 * Product service that will later ping a /products endpoint to display the product catalogue
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { MOCKPRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // method to return mock products
  // todo: call an endpoint to return this array later
  // getProducts(): Observable<Product[]> {
  //   return of(MOCKPRODUCTS);
  // }

  getProducts() : Product []{
    return MOCKPRODUCTS;
  }
}
