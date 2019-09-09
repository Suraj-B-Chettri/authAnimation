import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import * as $ from 'jquery';
import { CountryService } from './country.service';
import { ICountry } from './ICountry';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  countries : ICountry[];
  constructor(private _countryCode : CountryService,public router: Router) { }

  ngOnInit() {
    this.countries = this._countryCode.getData();
    $("#signinsideContent").removeClass("slide-right");
    $("#mainSignUp").removeClass("slide-left");
    $("#signinsideContent").addClass("slide-to-right");
      $("#mainSignUp").addClass("slide-to-left");
    $("#signinButton").click(function(){
      $("#signinsideContent").removeClass("slide-to-right");
      $("#mainSignUp").removeClass("slide-to-left");
      $("#signinsideContent").addClass("slide-right");
      $("#mainSignUp").addClass("slide-left");


    });
  }
  toSignin(){
    setTimeout(()=>{
      this.router.navigate(['/signin'])
    },1000)
  }
  onSubmit(e){
    console.log(e.value)
  }

}


