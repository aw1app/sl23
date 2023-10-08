import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductV2Service } from '../services/product-v2.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm!: FormGroup;

  isProductNameInvalid: boolean = false;
  isProductPriceInvalid: boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductV2Service) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productPrice: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.max(100000)]],
      onSale: [false]  // Default to "Not on sale"
    });
  }

  addProduct() {
    // Logic to add product goes here
    console.log('Product added:', this.productForm.value);
    //let productFormObject=this.productForm.value
    //this.productService.addProduct(new Product(1, productFormObject.productName, productFormObject.productPrice, 'Description goes here', 'Category', 'thumbnail-url.jpg'));
    
  }

}
