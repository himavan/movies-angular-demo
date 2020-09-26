import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false
    }
    return true;
  }

  public isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false
    }

    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === "true") {
      return true
    }

    return false

  }
}
