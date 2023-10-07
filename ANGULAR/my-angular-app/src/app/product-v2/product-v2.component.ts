import { Component, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-v2',
  templateUrl: './product-v2.component.html',
  styleUrls: ['./product-v2.component.css']
})
export class ProductV2Component {

  product:Product = new Product("Nokia", 60000,"Nokia latest Angroid phone v13.0", "assets/images/NokiaPhone.png");

  //Demo getting data from the parent component
@Input('var1') messageFromParent!:string;


  str1:string="some string";

  f2=()=> console.log(this.messageFromParent);

  i:number=0;
  f=():void=> {
    console.log(`Called f() .. ${this.i++} times`);
    console.log(`str1  is  ${this.str1} `);
  }
}
