import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcuraFretePageRoutingModule } from './procura-frete-routing.module';

import { ProcuraFretePage } from './procura-frete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcuraFretePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ProcuraFretePage]
})
export class ProcuraFretePageModule {}
