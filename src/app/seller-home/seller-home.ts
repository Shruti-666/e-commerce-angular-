import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { product } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-seller-home',
  imports: [CommonModule, AsyncPipe, RouterLink],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css',
})
export class SellerHome implements OnInit {
  producteDeleted = new BehaviorSubject<string | null>(null);
  // productLists: undefined | product[];
  productLists=new BehaviorSubject<any | null>([]);

  productMessage: undefined | string;
  cd: any;
  constructor(private product: Product) {
  this.product.productList().subscribe((result) => {
      // console.warn(result)
      this.productLists.next(result)
      // console.log(this.productLists)
      // this.cd.detectChanges();
    });
  }
  ngOnInit(): void {
  
  }
  deleteProduct(id: string) {
    console.warn('test id', id);
    this.product.deleteproduct(id).subscribe((result) => {
      if (result) {
        this.producteDeleted.next('Product Deleted Successfully');
        if (this.productLists) {
        const updated = this.productLists.value.filter((p: any) => p.id !== id);
        this.productLists.next(updated);  
      }
      }
      setTimeout(() => this.producteDeleted.next(null), 3000);
    });
  }

  
}
