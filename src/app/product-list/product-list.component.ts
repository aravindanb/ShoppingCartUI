import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MOCKPRODUCTS } from '../mock-products'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = MOCKPRODUCTS; 
  constructor() { }

  ngOnInit() {
  }

}
