import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoneiroFormPage } from './caminhoneiro-form.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoneiroFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoneiroFormPageRoutingModule {}
