/**
 * Product service that will later ping a /products endpoint to display the product catalogue
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'http://localhost:3000/orders';

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

  getProduct(id: string): Observable<Product> {

    const url = `${this.productsUrl}/${id}`;
    // return of(MOCKPRODUCTS.find(product => product._id === id));

    return this.http.get<Product>(url).pipe(
      tap(_ => console.log('fetched Product by id =${id}'))
    );
  }
}
