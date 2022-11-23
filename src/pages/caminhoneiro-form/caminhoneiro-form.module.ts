import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { CaminhoneiroFormPageRoutingModule } from './caminhoneiro-form-routing.module';

import { CaminhoneiroFormPage } from './caminhoneiro-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoneiroFormPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CaminhoneiroFormPage],
  providers: [NavParams]
})
export class CaminhoneiroFormPageModule { }
