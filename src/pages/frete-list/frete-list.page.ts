import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { FiltroFreteTO } from 'src/model/FiltroFreteTO';
import { FreteTO } from 'src/model/FreteTO';
import { EstadoService } from 'src/services/estado.service';
import { FreteService } from 'src/services/frete.service';
import { FiltroFretePage } from '../filtro-frete/filtro-frete.page';


@Component({
  selector: 'frete-list',
  templateUrl: 'frete-list.page.html',
  styleUrls: ['frete-list.page.scss'],
})
export class FreteListPage {
  listafrete: FreteTO[] = [];
  estados: any[] = [];
  municipios: any[] = [];
  filtro: FiltroFreteTO = new FiltroFreteTO();

  constructor(private freteService: FreteService, private router: Router, private modalCtrl: ModalController) {
    this.getFretes();
  }

  ngOnInit() { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getFretes() {
    this.freteService.getFretes().subscribe((data: any) => {
      console.log(data.fretes);
      this.listafrete = data.fretes;
      //frete.data_postagem = new Date(frete.data_postagem.toISOString());
    });
  }

  async openFreteDetalhe(frete: any) {
    this.router.navigateByUrl('frete-detail/' + frete.id);
  }

  async openModalFiltro() {
    console.log(this.listafrete);

    const modal = await this.modalCtrl.create({
      component: FiltroFretePage,
      componentProps: { 'filtro': this.filtro }
    });
    modal.present();

    modal.onDidDismiss().then((data: any) => {
      this.filtro = data.data.filtro;
      console.log(this.filtro);
      //Fazer o filtro depois.
      /*this.freteService.filtroFrete(this.filtro).subscribe((retorno: FreteTO[]) => {
        this.listafrete = [];
        console.log(retorno);
        this.listafrete = retorno;
      })*/
    });
  }

}
