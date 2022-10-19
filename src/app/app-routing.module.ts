import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'frete-form',
    loadChildren: () => import('./frete-form/frete-form.module').then(m => m.FreteFormPageModule)
  },
  {
    path: 'login-caminhoneiro',
    loadChildren: () => import('./login-caminhoneiro/login-caminhoneiro.module').then(m => m.LoginCaminhoneiroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
