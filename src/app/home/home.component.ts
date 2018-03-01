import { Component, OnInit } from '@angular/core';
import {GlobalvarService} from './../globalvar.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GlobalvarService]
})
export class HomeComponent implements OnInit {
  checkUrl : boolean;
  title  = "hello this is home page";
  constructor(private gv:GlobalvarService) { }

  ngOnInit() {
    
  }
  ngDoCheck(){
    this.checkUrl = this.gv.getURLInfo();
    console.log(this.checkUrl);
  }
}
