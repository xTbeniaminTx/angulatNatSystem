import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean = false;

  signIn() {
    const isAuthOn = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(this.isAuth=true);
      }, 2000);
  });
  }

  signOut() {
    this.isAuth=false;
  }

  constructor() { }
}
