import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCaminhoneiroPageRoutingModule } from './login-caminhoneiro-routing.module';

import { LoginCaminhoneiroPage } from './login-caminhoneiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCaminhoneiroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginCaminhoneiroPage]
})
export class LoginCaminhoneiroPageModule { }
