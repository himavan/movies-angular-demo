import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin = false;
  constructor(public auth: AuthService, public router:Router) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated()){
      this.isLogin = true;
    } 

    console.log(this.auth.isAuthenticated())
  }

  logout(){
    this.isLogin=false;
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
