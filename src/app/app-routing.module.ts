import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'frete-form',
    loadChildren: () => import('../pages/frete-form/frete-form.module').then(m => m.FreteFormPageModule)
  },
  {
    path: 'frete-list',
    loadChildren: () => import('../pages/frete-list/frete-list.module').then(m => m.FreteListPageModule)
  },
  {
    path: 'login-caminhoneiro',
    loadChildren: () => import('../pages/login-caminhoneiro/login-caminhoneiro.module').then(m => m.LoginCaminhoneiroPageModule)
  },
  {
    path: 'procura-frete',
    loadChildren: () => import('../pages/procura-frete/procura-frete.module').then(m => m.ProcuraFretePageModule)
  },
  {
    path: 'frete-detail/:id',
    loadChildren: () => import('../pages/frete-detail/frete-detail.module').then(m => m.FreteDetailPageModule)
  },
  {
    path: 'filtro-frete',
    loadChildren: () => import('../pages/filtro-frete/filtro-frete.module').then(m => m.FiltroFretePageModule)
  },
  {
    path: 'procura-frete-list',
    loadChildren: () => import('../pages/procura-frete-list/procura-frete-list.module').then(m => m.ProcuraFreteListPageModule)
  },
  {
    path: 'caminhoneiro-form',
    loadChildren: () => import('../pages/caminhoneiro-form/caminhoneiro-form.module').then(m => m.CaminhoneiroFormPageModule)
  }


];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
