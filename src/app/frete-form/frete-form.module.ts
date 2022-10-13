import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreteFormPageRoutingModule } from './frete-form-routing.module';

import { FreteFormPage } from './frete-form.page';
import { VeiculoService } from 'src/services/veiculo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreteFormPageRoutingModule,
    VeiculoService
  ],
  declarations: [FreteFormPage]
})
export class FreteFormPageModule { }
