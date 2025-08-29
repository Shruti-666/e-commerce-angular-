import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginIn, SignUp } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class Seller {
  constructor(private http: HttpClient){

  }
  userSignUp(data: SignUp){
    return this.http.post('http://localhost:3000/seller',data);
  }
  
  userLogin(data: LoginIn){
    console.warn(data)
    //api call 
  }
}
