import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule, RouterLink],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth {
  constructor(public route: Router){
    // this.route.navigate('seller-home')
  }
  signUp(data:object):void{
    // console.warn(data)

  }

}
