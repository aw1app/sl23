import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name:string = "Samsung";
  price:number=10005;

  /// controller code

  // const f1 = ():string => {
  //   return "Hello World";
  // }

}
