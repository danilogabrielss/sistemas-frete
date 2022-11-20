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

  constructor(private freteService: FreteService, private estadoService: EstadoService, private router: Router, private modalCtrl: ModalController) {
    this.getEstados();
    this.getFretes();
  }

  ngOnInit() { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getEstados() {
    this.estadoService.getEstados().subscribe(data => this.estados = data);
  }

  getFretes() {
    this.freteService.getFretes().subscribe((data: any) => {
      this.listafrete = data.fretes;
      this.listafrete.forEach(frete => {
        //frete.data_postagem = new Date(frete.data_postagem.toISOString());
        this.estados.forEach(estado => {
          if (frete.estado_origem == estado.id) {
            frete.ds_estado_origem = estado.sigla;
          }
          if (frete.estado_destino == estado.id) {
            frete.ds_estado_destino = estado.sigla;
          }
        });
        this.estadoService.getMunicipios(frete.estado_origem).subscribe(data => {
          data.forEach(municipio => {
            if (municipio.id == frete.cidade_origem) {
              frete.ds_cidade_origem = municipio.nome;
            }
            if (municipio.id == frete.cidade_destino) {
              frete.ds_cidade_destino = municipio.nome;
            }
          });
        });
      });
    });
  }

  async openFreteDetalhe(frete: any) {
    this.router.navigateByUrl('frete-detail/' + frete.id);
  }

  async openModalFiltro() {
    const modal = await this.modalCtrl.create({
      component: FiltroFretePage,
      componentProps: { 'filtro': this.filtro }
    });
    modal.present();

    modal.onDidDismiss().then((data: any) => {
      this.filtro = data.data.filtro;
      //Fazer o filtro depois.
    });
  }

}
