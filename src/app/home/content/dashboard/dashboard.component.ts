import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count : number = 0;
  
  results:any=[];
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getDataFromApi()
  }
  decrement(){
    this.count --;
  }
  increment(){
    this.count ++;
  }
  

  getDataFromApi(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
     // Read the result field from the JSON response.
     this.results = data;
   });
}
}
