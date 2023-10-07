import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-v2',
  templateUrl: './product-v2.component.html',
  styleUrls: ['./product-v2.component.css']
})
export class ProductV2Component {

  product:Product = new Product("Nokia", 60000,"Nokia latest Angroid phone v13.0", "assets/images/NokiaPhone.png");
}
