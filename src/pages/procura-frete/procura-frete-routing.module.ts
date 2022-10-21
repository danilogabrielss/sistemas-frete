import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcuraFretePage } from './procura-frete.page';

const routes: Routes = [
  {
    path: '',
    component: ProcuraFretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcuraFretePageRoutingModule {}
