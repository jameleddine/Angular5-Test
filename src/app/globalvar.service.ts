import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Injectable()
export class GlobalvarService {

  constructor(private route: Router) { }

  getURLInfo(){
    if(this.route.url == '/login'){
      return false;
    }
    else{
      return true;
    }
  }
}
