import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroFretePageRoutingModule } from './filtro-frete-routing.module';

import { FiltroFretePage } from './filtro-frete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroFretePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FiltroFretePage]
})
export class FiltroFretePageModule {}
