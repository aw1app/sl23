import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductV2Service {

  private apiUrl = 'https://dummyjson.com/products';

  products:Product[] = [];
  product!: Product;

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<{ products: Product[] }>(this.apiUrl).
    pipe(map(response => response.products));
  }

  getProduct(id:string): Observable<Product> {
    return this.httpClient.get< Product >(this.apiUrl+"/"+id);
  }

  addProduct(title:string):void{
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `${title}`,
        /* other product data */
      })
    })
    .then(res => res.json())
    .then(console.log);
  }

  //CHALENGE: Write a ProductListV5 that displays products whose price is >1000

}
