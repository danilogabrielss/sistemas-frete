import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { FreteDetailPageRoutingModule } from './frete-detail-routing.module';

import { FreteDetailPage } from './frete-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreteDetailPageRoutingModule
  ],
  declarations: [FreteDetailPage],
  providers: [NavParams]
})
export class FreteDetailPageModule { }
