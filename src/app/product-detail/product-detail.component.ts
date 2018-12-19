import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // The Angular compiler won't bind to properties of a different component unless they are Input or Output properties.
  @Input() product: Product; 

  constructor() { }

  ngOnInit() {
  }

}
