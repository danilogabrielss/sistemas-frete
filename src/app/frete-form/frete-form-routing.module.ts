import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculoService } from 'src/services/veiculo.service';

import { FreteFormPage } from './frete-form.page';

const routes: Routes = [
  {
    path: '',
    component: FreteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), VeiculoService],
  exports: [RouterModule],
})
export class FreteFormPageRoutingModule { }
