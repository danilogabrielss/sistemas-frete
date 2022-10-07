import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FreteTO } from 'src/model/FreteTO';
import { DataService, Message } from '../../services/data.service';
import { ViewMessagePage } from '../view-message/view-message.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fretes: FreteTO[] = [];
  constructor(private dataService: DataService,
    private navCtrl: NavController) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.dataService.getMessages();
  }

  getFretes() {
    return this.dataService.getFretes();
  }

  openFreteDetalhe(){
    this.navCtrl.navigateForward('/view-message');
  }

}
