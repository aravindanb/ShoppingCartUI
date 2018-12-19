import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MOCKPRODUCTS } from '../mock-products'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product [] = MOCKPRODUCTS;
  
  // Public property from the component to be bound to the template
  selectedProduct: Product; 

  // method to display a product on selecting from a list, bound to the template
  onSelect(product: Product): void{ 
    this.selectedProduct = product;
  }

  constructor() { }

  ngOnInit() {
  }

}
