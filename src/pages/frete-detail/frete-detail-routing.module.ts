import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreteDetailPage } from './frete-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FreteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreteDetailPageRoutingModule {}
