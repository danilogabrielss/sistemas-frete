import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FreteTO } from 'src/model/FreteTO';
import { DataService, Message } from '../../services/data.service';

@Component({
  selector: 'frete-list',
  templateUrl: 'frete-list.page.html',
  styleUrls: ['frete-list.page.scss'],
})
export class FreteListPage {
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

}
