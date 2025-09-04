import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';
import { product } from '../data-type';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './seller-update-product.html',
  styleUrl: './seller-update-product.css',
})
export class SellerUpdateProduct implements OnInit {
  productData:any= {
  name: '',
  price: 0,
  category: '',
  color: '',
  img: '',
  desc: '',
  id: ''
};
  constructor(private route: ActivatedRoute, private product: Product) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data:product) => {
        console.warn(data);
        // this.productData = data;
        this.populateForm(data);
        
      });
  }

  populateForm(data:any){
    for(let item in data  ){
        this.productData[item]= data[item]
        console.log(this.productData)
    }
  }

   
  submit(data: any) {}

}
