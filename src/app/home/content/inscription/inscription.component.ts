import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  name : string;
  email:string;
  phone:number;
  about:string;
  password:string;

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  aboutFormControl = new FormControl();

  constructor(private translate: TranslateService) {
   translate.addLangs(["en", "fr"]);
   translate.setDefaultLang('en');

   let browserLang = translate.getBrowserLang();
   translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
}


  ngOnInit() {
  }

  succes(){
    let data={
      name:this.name,
      email:this.email,
      phone:this.phone,
      about:this.about,
      password:this.password

    }
    console.log(data);

     localStorage.setItem('user',JSON.stringify(data));
     this.name = "";
     this.email = "";
     this.phone = null;
     this.about = "";
     this.password = "";
  
  }

}
