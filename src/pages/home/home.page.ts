import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FreteTO } from 'src/model/FreteTO';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fretes: FreteTO[] = [];
  constructor(private navCtrl: NavController) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  goToLogin(tela: string) {
    this.navCtrl.navigateRoot('/' + tela);
  }
}
