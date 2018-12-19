import { Component, OnInit } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: product = {
    productid: 1, 
    product: 'DS 400 Camera', 
    productPrice: 4000, 
    productQty: 1
  }
  constructor() { }

  ngOnInit() {
  }

}
