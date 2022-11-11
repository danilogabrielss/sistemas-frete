import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { FreteTO } from 'src/model/FreteTO';
import { EstadoService } from 'src/services/estado.service';
import { FreteService } from 'src/services/frete.service';

@Component({
  selector: 'app-frete-detail',
  templateUrl: './frete-detail.page.html',
  styleUrls: ['./frete-detail.page.scss'],
})
export class FreteDetailPage implements OnInit {

  idFrete: any;
  frete: FreteTO;

  constructor(private router: ActivatedRoute,
    private estadoService: EstadoService, private freteService: FreteService, private navCtrl: NavController) {
    this.router.params.subscribe((params: any) => {
      this.idFrete = params.id;
    });
  }

  ngOnInit() {
    this.freteService.getFreteByid(this.idFrete).subscribe((data: any) => {
      this.frete = data;
      forkJoin({
        req1: this.estadoService.getMunicipioById(this.frete.cidade_origem),
        req2: this.estadoService.getMunicipioById(this.frete.cidade_destino),
        req3: this.estadoService.getEstadoById(this.frete.estado_origem),
        req4: this.estadoService.getEstadoById(this.frete.estado_destino),
      }).subscribe(res => {
        console.log(res);
        this.frete.ds_cidade_origem = res.req1.nome;
        this.frete.ds_cidade_destino = res.req2.nome;
        this.frete.ds_estado_origem = res.req3.sigla;
        this.frete.ds_estado_destino = res.req4.sigla;

        document.getElementById('lblOrigem').innerHTML = this.frete.ds_cidade_origem + '/' + this.frete.ds_estado_origem;
        document.getElementById('lblDestino').innerHTML = this.frete.ds_cidade_destino + '/' + this.frete.ds_estado_destino;
        document.getElementById('lblDescricao').innerHTML = this.frete.descricao;
        document.getElementById('lblProduto').innerHTML = this.frete.produto;
        document.getElementById('lblPreco').innerHTML = 'R$' + this.frete.preco;
        document.getElementById('lblRastreado').innerHTML = this.frete.rastreamento == true ? '<ion-icon name="checkmark-circle-outline"></ion-icon>' : '<ion-icon name="close-circle-outline"></ion-icon>';
        document.getElementById('lblAgenciado').innerHTML = this.frete.agenciamento == true ? '<ion-icon name="checkmark-circle-outline"></ion-icon>' : '<ion-icon name="close-circle-outline"></ion-icon>';
        document.getElementById('lblLona').innerHTML = this.frete.lona == true ? '<ion-icon name="checkmark-circle-outline"></ion-icon>' : '<ion-icon name="close-circle-outline"></ion-icon>';
        document.getElementById('lblPeso').innerHTML = this.frete.peso + 'kgs';
        document.getElementById('lblEspecie').innerHTML = this.frete.tipo_carga;
        



      });
    });
  }

  voltarTelaFrete() {
    this.navCtrl.back();
  }

}
