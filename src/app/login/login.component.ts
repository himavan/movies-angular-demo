import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata

  constructor(public dataservice:DataService, public router:Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    if(this.dataservice.validateUser(data.value.username,data.value.password)){
      localStorage.setItem('token',data.value.username);
      this.router.navigateByUrl('/')
    } else {
      alert('Invalid Credentials')
    }
  }
  
}
