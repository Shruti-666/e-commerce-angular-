import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { Seller } from '../services/seller';
import { SignUp } from '../data-type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth implements OnInit{
  constructor(private seller:Seller, private router: Router){
  }
  ngOnInit(): void{
    this.seller.reloadSeller()
  }
  showLogin = false
  signUp(data:SignUp):void{
    // console.warn(data)
    console.warn(data);
    this.seller.userSignUp(data);
  }
  logIn(data:SignUp):void{
    // console.warn(data)
    this.seller.userLogin(data)}
  openLogin(){
    this.showLogin = !this.showLogin
  }
  openSignUp(){
    this.showLogin = !this.showLogin
  }

}
