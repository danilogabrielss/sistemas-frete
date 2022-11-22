import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProcuraFreteTO } from 'src/model/ProcuraFreteTO';
import { ProcuraFreteService } from 'src/services/procura-frete.service';

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

  async openCaminhoneiroDetalhe(procuraFrete: ProcuraFreteTO) {
    console.log(procuraFrete);

    /*const modal = await this.modalCtrl.create({
      component: CaminhoneiroPage,
      componentProps: { 'filtro': this.filtro }
    });
    modal.present();

    modal.onDidDismiss().then((data: any) => {      
    });*/
  }

}
