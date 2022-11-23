import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tela inicial', url: '/home', icon: 'home' },
    //{ title: 'Login para caminhoneiro', url: '/login-caminhoneiro', icon: 'log-in' },
    { title: 'Cadastro de Caminhoneiros', url: '/caminhoneiro-form', icon: 'add' },
    { title: 'Cadastro de Frete', url: '/frete-form', icon: 'add' },
    { title: 'Listagem de Frete', url: '/frete-list', icon: 'list' },
    { title: 'Procura Frete', url: '/procura-frete', icon: 'search' },
    { title: 'Listagem de Caminhoneiros', url: '/procura-frete-list', icon: 'list' },
  ];
  constructor() { }
}
