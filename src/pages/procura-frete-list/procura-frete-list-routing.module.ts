import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcuraFreteListPage } from './procura-frete-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProcuraFreteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcuraFreteListPageRoutingModule {}
