import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSpinner, LoadingController, NavController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { EmpresaTO } from 'src/model/EmpresaTO';
import { FreteTO } from 'src/model/FreteTO';
import { EmpresaService } from 'src/services/empresa.service';
import { FreteService } from 'src/services/frete.service';

@Component({
  selector: 'app-frete-detail',
  templateUrl: './frete-detail.page.html',
  styleUrls: ['./frete-detail.page.scss'],
})
export class FreteDetailPage implements OnInit {

  idFrete: any;
  frete: FreteTO;
  empresa: EmpresaTO;

  constructor(private router: ActivatedRoute,
    private freteService: FreteService, private navCtrl: NavController, private empresaService: EmpresaService, private loadingController: LoadingController) {
    this.router.params.subscribe((params: any) => {
      this.idFrete = params.id;
      this.carregaFrete();
    });
  }
  ngOnInit() { }

  async carregaFrete() {
    this.freteService.getFreteByid(this.idFrete).subscribe(async (data: any) => {
      console.log(data);
      var loading = this.loadingController.create({
        message: 'Carregando'
      });
      (await loading).present();
      this.frete = data;
      forkJoin({
        req1: this.empresaService.getEmpresasByid(this.frete.empresaId),
      }).subscribe(res => {
        document.getElementById('lblOrigem').innerHTML = this.frete.nm_cidade_origem + '/' + this.frete.sg_estado_origem;
        document.getElementById('lblDestino').innerHTML = this.frete.nm_cidade_destino + '/' + this.frete.sg_estado_destino;
        document.getElementById('lblDescricao').innerHTML = this.frete.descricao;
        document.getElementById('lblProduto').innerHTML = this.frete.produto;
        document.getElementById('lblPreco').innerHTML = 'R$' + this.frete.preco;
        document.getElementById('lblRastreado').innerHTML = this.frete.rastreamento == true ? '<ion-icon name="checkmark-circle-outline"></ion-icon>' : '<ion-icon name="close-circle-outline"></ion-icon>';
        document.getElementById('lblAgenciado').innerHTML = this.frete.agenciamento == true ? '<ion-icon name="checkmark-circle-outline"></ion-icon>' : '<ion-icon name="close-circle-outline"></ion-icon>';
        document.getElementById('lblLona').innerHTML = this.frete.lona == true ? '<ion-icon name="checkmark-circle-outline"></ion-icon>' : '<ion-icon name="close-circle-outline"></ion-icon>';
        document.getElementById('lblPeso').innerHTML = this.frete.peso + 'kgs';
        document.getElementById('lblEspecie').innerHTML = this.frete.tipo_carga;

        var empresa = res.req1;
        var contatos: string;
        if (empresa.Contatos_empresa.lenght > 1)
          empresa.Contatos_empresa.forEach(contato => {
            contatos += contato.telefone;
          });
        else {
          contatos = empresa.Contatos_empresa.telefone;
        }
        this.empresa = empresa;

        document.getElementById('lblNmEmpresa').innerHTML = this.empresa.nome;
        document.getElementById('lblContatoEmpresa').innerHTML = contatos;
      });
      (await loading).dismiss();
    });
  }

  voltarTelaFrete() {
    this.navCtrl.back();
  }

}
