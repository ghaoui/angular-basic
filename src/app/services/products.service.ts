import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('/api/products');
  }

  getProduct(id: number) {
     this.http
      .get<Product>('/api/products/' + id)
      .subscribe((product) => {
        console.log(product);
      });
  }

  createProduct(product: Product) {
     this.http.post('/api/products', product).subscribe((product) => {
        console.log(product);
      })
  }

  updateProduct(product: Product, id: string) {
     this.http.patch('/api/products/' + id, product).subscribe((product) => {
        console.log(product);
      })
  }

  deleteProduct(id: string) {
     this.http.delete('/api/products/' + id).subscribe((product) => {
        console.log(product);
      })
  }
}
