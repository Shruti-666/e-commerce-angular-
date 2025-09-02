import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class Product {
  
  constructor(private http: HttpClient) {}
  addProduct(data: product) {
    console.warn('service called');
    return this.http.post('http://localhost:3000/products',data);
  }
}
