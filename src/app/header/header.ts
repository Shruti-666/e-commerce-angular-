import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import{TitleCasePipe} from '@angular/common'

@Component({
  selector: 'app-header',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  menuType: string = 'default';
  sellerName:string ='';
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.route.events.subscribe((data: any) => {
      if (data.url) {
        // console.warn(data.url)
        if (localStorage.getItem('seller') && data.url.includes('seller')) {
          console.warn('in seller area');
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData =sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName =sellerData.name
          }
        } else {
          console.warn('outside seller');
          this.menuType = 'default';
        }
      }
    });
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}
