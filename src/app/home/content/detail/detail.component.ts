import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  Quiz:any = []

  constructor() { }

  ngOnInit() {

    this.Quiz = JSON.parse(localStorage.getItem('question'))
    console.log(this.Quiz)

  }
  verifQ(elem){
    console.log(elem)
  }

}
