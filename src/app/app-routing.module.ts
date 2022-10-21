import { NgModule } from '@angular/core';
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
    loadChildren: () => import('../pages/procura-frete/procura-frete.module').then( m => m.ProcuraFretePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
