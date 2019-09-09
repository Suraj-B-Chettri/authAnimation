import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import * as $ from 'jquery';
declare var $ : any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,private socialAuthService: AuthService) { }

  ngOnInit() {
    // animation for signin
    $("#SignIn").removeClass("slide-right");
      $("#sideContent").removeClass("slide-left");
      $("#SignIn").addClass("slide-to-right");
      $("#sideContent").addClass("slide-to-left");
    $("#signinButton").click(function(){
      $("#SignIn").removeClass("slide-to-right");
      $("#sideContent").removeClass("slide-to-left")
      $("#SignIn").addClass("slide-right");
      $("#sideContent").addClass("slide-left");

    });
    }
    // when click on signup button
    toSignup(){
      setTimeout(()=>{
        this.router.navigate(['/signup'])
      },1000)
    }
    // on form submit button
    onsubmit(e){
      console.log(e.value);
    }

    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
          // ...
        }
      );
    }


}

