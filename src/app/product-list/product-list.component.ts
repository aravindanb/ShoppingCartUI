import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService} from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product [];
  
  // Public property from the component to be bound to the template
  selectedProduct: Product; 

  // method to display a product on selecting from a list, bound to the template
  onSelect(product: Product): void{ 
    this.selectedProduct = product;
  }

  getProducts(): void{
    this.products = this.productService.getProducts();
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

}
