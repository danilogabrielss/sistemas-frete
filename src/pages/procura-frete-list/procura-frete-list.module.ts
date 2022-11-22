import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcuraFreteListPageRoutingModule } from './procura-frete-list-routing.module';

import { ProcuraFreteListPage } from './procura-frete-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcuraFreteListPageRoutingModule
  ],
  declarations: [ProcuraFreteListPage]
})
export class ProcuraFreteListPageModule {}
