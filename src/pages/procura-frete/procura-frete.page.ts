import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { CaminhoneiroTO } from 'src/model/CaminhoneiroTO';
import { CaminhoneiroService } from 'src/services/caminhoneiro.service';
import { EstadoService } from 'src/services/estado.service';
import { ProcuraFreteService } from 'src/services/procura-frete.service';

@Component({
  selector: 'app-procura-frete',
  templateUrl: 'procura-frete.page.html',
  styleUrls: ['procura-frete.page.scss'],
})
export class ProcuraFretePage implements OnInit {

  procuraFreteForm: FormGroup;
  dataHoje: any = new Date().toISOString();

  public estados: any[] = [];
  public municipios: any[] = [];
  public caminhoneiros: CaminhoneiroTO[] = [];

  public estadosDestino: any[] = [];
  public municipiosDestino: any[] = [];

  public estado_origem: any = undefined;
  public cidade_origem: any = undefined;
  public estado_destino: any = undefined;
  public cidade_destino: any = undefined;
  public data_inicio = undefined;

  constructor(public fb: FormBuilder, private estadoService: EstadoService, private procuraFreteService: ProcuraFreteService,
    private caminhoneiroService: CaminhoneiroService, private loadingController: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.procuraFreteForm = this.fb.group({
      cpf: [''],
      estado_origem: ['', Validators.required],
      cidade_origem: ['', Validators.required],
      data_inicio: [this.dataHoje],
      estado_destino: [null],
      cidade_destino: [null],
    });
    this.carregaEstados();
    this.carregaCaminhoneiro();
  }

  carregaEstados() {
    this.estadoService.getEstados().subscribe(data => {
      this.estados = data;
      this.estadosDestino = data
    });
  }

  carregaCaminhoneiro() {
    this.caminhoneiroService.getCaminhoneiro().subscribe(data => {
      this.caminhoneiros = data;
    });
  }

  onChange() {
    this.carregaMunicipios();
  }

  carregaMunicipios() {
    this.estadoService.getMunicipios(this.estado_origem.id).subscribe(data => {
      this.municipios = [];
      this.municipios = data;
    });
  }

  onChangeDestino() {
    this.carregaMunicipiosDestino();
  }

  carregaMunicipiosDestino() {
    this.estadoService.getMunicipios(this.estado_destino.id).subscribe(data => {
      this.municipiosDestino = [];
      this.municipiosDestino = data;
    });
  }

  async salvarProcuraFrete() {
    var loading = this.loadingController.create({
      message: 'Carregando'
    });
    (await loading).present();
    var params = {
      cpf: this.procuraFreteForm.get('cpf').value,
      estado_origem: this.procuraFreteForm.get('estado_origem').value.id.toString(),
      cidade_origem: this.procuraFreteForm.get('cidade_origem').value.id.toString(),
      data_inicio: this.data_inicio,
      estado_destino: this.procuraFreteForm.get('estado_destino').value != null ? this.procuraFreteForm.get('estado_destino').value.id.toString() : '',
      cidade_destino: this.procuraFreteForm.get('cidade_destino').value != null ? this.procuraFreteForm.get('cidade_destino').value.id.toString() : '',
      ativo: true
    }
    console.log(params);

    this.procuraFreteService.postProcuraFrete(params).subscribe(async (data: any) => {
      console.log(data);
      (await loading).dismiss();
    });
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.procuraFreteForm.get('data_inicio').setValue(date, {
      onlyself: true
    });
    this.data_inicio = e.detail.value;
  }

  async alerta(mensagem) {
    var alert = await this.alertCtrl.create({
      message: mensagem,
      buttons: ['Ok'],
    });
    alert.present();
  }

}
