import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private route : Router) { }

  ngOnInit() {
  }
  connecter(){
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if(user.email == this.email && user.password == this.password){
      alert("sucess");
      this.route.navigate(['/']);
    }
    else{
      alert("echec")
    }
  }

}
