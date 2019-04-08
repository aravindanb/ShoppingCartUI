/**
 * Product service that will later ping a /products endpoint to display the product catalogue
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { MOCKPRODUCTS } from './mock-products';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'http://localhost:3000/orders/';

  // method to return mock products
  // todo: call an endpoint to return this array later

  // getProducts(): Observable<Product[]> {
  //   return of(MOCKPRODUCTS);
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  // method to return mock product by id
  // todo: call an endpoint to return this json later
  // getProducts(): Observable<Product[]> {
  //   return of(MOCKPRODUCTS);
  // }
  getProduct(id: number): Observable<Product> {
    return of(
      MOCKPRODUCTS.find(product => product.productid === id));
  }
}
