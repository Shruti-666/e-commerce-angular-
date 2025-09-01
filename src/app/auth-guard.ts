import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Seller } from './services/seller';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const sellerService = inject(Seller);

  if (localStorage.getItem('seller')) {
    return true;
  }

  return sellerService.isSellerLoggedIn;
};
