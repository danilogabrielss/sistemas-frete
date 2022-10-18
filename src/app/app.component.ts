import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tela inicial', url: '/home', icon: 'home' },
    { title: 'Login para caminhoneiro', url: '/login-caminhoneiro', icon: 'log-in' },
    { title: 'Cadastro de Frete', url: '/frete-form', icon: 'add' },

    /*{ title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
  ];
  /*public labels = ['Tela inicial', 'Login para caminhoneiro', 'Cadastro de Frete'];*/
  constructor() { }
}
