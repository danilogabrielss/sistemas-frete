import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FreteListPage } from './frete-list.page';
//import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FreteListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //HomePageRoutingModule,
    [RouterModule.forChild(routes)], 
    ReactiveFormsModule
  ],
  declarations: [FreteListPage],
  exports: [RouterModule]  
})
export class FreteListPageModule {}
