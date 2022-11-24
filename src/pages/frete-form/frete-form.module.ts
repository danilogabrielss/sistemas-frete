import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreteFormPageRoutingModule } from './frete-form-routing.module';

import { FreteFormPage } from './frete-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreteFormPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FreteFormPage]
})
export class FreteFormPageModule { }
