import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(
      'https://nestjs-basic.herokuapp.com/products'
    );
  }

  getProduct(id: number) {
    return this.http.get<Product>(
      'https://nestjs-basic.herokuapp.com/products/' + id
    );
  }

  createProduct(product: Product) {
    return this.http.post<Product>(
      'https://nestjs-basic.herokuapp.com/products',
      product
    );
  }

  updateProduct(product: Product, id: string) {
    return this.http.patch(
      'https://nestjs-basic.herokuapp.com/products/' + id,
      product
    );
  }

  deleteProduct(id: string) {
    return this.http.delete<string>(
      'https://nestjs-basic.herokuapp.com/products/' + id
    );
  }
}
