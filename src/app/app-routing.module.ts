import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CameraComponent } from './camera/camera.component';
import { SendimgComponent } from './sendimg/sendimg.component';

const routes: Routes = [{
  path: 'signin',
  component: SigninComponent
  },{
  path:'signup',
  component:SignupComponent
  },{
    path: 'camera',
    component: CameraComponent
  },
  {
    path: 'sendimg',
    component: SendimgComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
