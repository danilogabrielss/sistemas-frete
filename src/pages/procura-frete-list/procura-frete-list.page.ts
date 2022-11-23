import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProcuraFreteTO } from 'src/model/ProcuraFreteTO';
import { ProcuraFreteService } from 'src/services/procura-frete.service';
import { CaminhoneiroFormPage } from '../caminhoneiro-form/caminhoneiro-form.page';

@Component({
  selector: 'app-procura-frete-list',
  templateUrl: './procura-frete-list.page.html',
  styleUrls: ['./procura-frete-list.page.scss'],
})
export class ProcuraFreteListPage implements OnInit {

  procuraFretes: ProcuraFreteTO[] = [];

  constructor(private procuraFreteService: ProcuraFreteService, private modalCtrl: ModalController) {
    this.carregaProcuraFrete();
  }

  ngOnInit() {
  }

  carregaProcuraFrete() {
    this.procuraFreteService.getProcuraFrete().subscribe((data: any) => {
      console.log(data);
      this.procuraFretes = data;
    });
  }

  async openCaminhoneiroDetalhe(caminhoneiro: any) {
    console.log(caminhoneiro);

    const modal = await this.modalCtrl.create({
      component: CaminhoneiroFormPage,
      componentProps: { 'caminhoneiro': caminhoneiro }
    });
    modal.present();

    modal.onDidDismiss().then((data: any) => { });
  }

}
