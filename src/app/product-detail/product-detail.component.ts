import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // The Angular compiler won't bind to properties of a different component unless they are Input or Output properties.
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('productId');
    console.log(id);
    this.productService.getProduct(id).subscribe(product => {
      console.log(product);
      this.product = product;
    });

  }

  ngOnInit() {
    this.getProduct();
  }

}
