import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  title:string;
  typeQ:number;
  reponseText:string;
  reponseRadio1:string;
  reponseRadio2:string;
  reponseCheckbox1:boolean;
  reponseCheckbox2:boolean;
  responseRadioText1:string;
  responseRadioText2:string;
  responseCheckboxText1:string;
  responseCheckboxText2:string;
  question: any = [];
  
  constructor() { }

  ngOnInit() {
  }
  submitQ(){
    if(localStorage.getItem('question')){
      this.question = JSON.parse(localStorage.getItem('question'))
    }
    let data;
    console.log(this.typeQ)
    if(this.typeQ==1){
      data={
        title: this.title,
        type:this.typeQ,
        ResponseTexte: this.reponseText
      }
      alert(this.title)
    }
    else if(this.typeQ==2){
      data={
        title: this.title,
        type:this.typeQ,
        radio : {
          radio1:this.reponseRadio1,
          radioText1:this.responseRadioText1,
          radio2:this.reponseRadio2,
          radioText2:this.responseRadioText2}
      }
      alert(this.title)
    }
    
    else{
      data={
        title: this.title,
        type:this.typeQ,
        checkbox : {
          check1:this.reponseCheckbox1,
          checkText1: this.responseCheckboxText1,
          check2:this.reponseCheckbox2,
          checkText2: this.responseCheckboxText2
          }
      }
      alert(this.title)
    }
    console.log(data);
    this.question.push(data);
    localStorage.setItem('question',JSON.stringify(this.question));


    


  }
}
