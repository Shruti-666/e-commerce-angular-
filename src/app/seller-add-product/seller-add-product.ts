import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Product } from '../services/product';
import { product } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css',
})
export class SellerAddProduct {
  checkaddProduct = new BehaviorSubject<boolean>(false)
  addProductMessage: string | undefined;
  constructor(private product: Product,private cd: ChangeDetectorRef) {}
  AddProduct(data: product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.checkaddProduct.next(true)
        this.addProductMessage = "Product Successfully Added";
        console.warn(this.checkaddProduct)
        this.cd.detectChanges();
      }
      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }
}
