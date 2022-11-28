import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { CarroceriaTO } from 'src/model/CarroceriaTO';
import { EmpresaTO } from 'src/model/EmpresaTO';
import { FreteTO } from 'src/model/FreteTO';
import { VeiculoTO } from 'src/model/VeiculoTO';
import { EmpresaService } from 'src/services/empresa.service';
import { EstadoService } from 'src/services/estado.service';
import { FreteService } from 'src/services/frete.service';


@Component({
  selector: 'app-frete-form',
  templateUrl: './frete-form.page.html',
  styleUrls: ['./frete-form.page.scss'],
})
export class FreteFormPage implements OnInit {

  formFrete: FormGroup;
  veiculos: VeiculoTO[] = [
    {
      id: 9,
      veiculo: "3/4"
    },
    {
      "id": 2,
      "veiculo": "Bitrem"
    },
    {
      "id": 6,
      "veiculo": "Bitruck"
    },
    {
      "id": 5,
      "veiculo": "Carreta"
    },
    {
      "id": 4,
      "veiculo": "Carreta LS"
    },
    {
      "id": 11,
      "veiculo": "Fiorino"
    },
    {
      "id": 1,
      "veiculo": "Rodotrem"
    },
    {
      "id": 8,
      "veiculo": "Toco"
    },
    {
      "id": 7,
      "veiculo": "Truck"
    },
    {
      "id": 3,
      "veiculo": "Vanderleia"
    },
    {
      "id": 10,
      "veiculo": "VLC"
    }
  ];
  carrocerias: CarroceriaTO[] = [
    {
      id: 9,
      "carroceria": "Apenas Cavalo"
    },
    {
      id: 1,
      "carroceria": "Baú"
    },
    {
      id: 2,
      "carroceria": "Baú Frigorífico"
    },
    {
      id: 4,
      "carroceria": "Caçamba"
    },
    {
      id: 5,
      "carroceria": "Grade Baixa"
    },
    {
      id: 6,
      "carroceria": "Graneleiro"
    },
    {
      id: 8,
      "carroceria": "Porta Container"
    },
    {
      id: 7,
      "carroceria": "Prancha"
    },
    {
      id: 3,
      "carroceria": "Sider"
    }
  ]
  especies: any[] = [
    {
      "id": 5,
      "especie": "Big Bag"
    },
    {
      "id": 8,
      "especie": "Caixas"
    },
    {
      "id": 3,
      "especie": "Container"
    },
    {
      "id": 1,
      "especie": "Diversos"
    },
    {
      "id": 4,
      "especie": "Fardos"
    },
    {
      "id": 6,
      "especie": "Grãos"
    },
    {
      "id": 2,
      "especie": "Paletes"
    },
    {
      "id": 9,
      "especie": "Sacos"
    },
    {
      "id": 7,
      "especie": "Unidades"
    }
  ]
  empresas: EmpresaTO[] = [];
  public estados: any[] = [];
  public municipios: any[] = [];

  public estadosDestino: any[] = [];
  public municipiosDestino: any[] = [];

  public estadoSelecionado: any = undefined;
  public cidadeSelecionada: any = undefined;

  public estadoDestinoSelecionado: any = undefined;
  public cidadeDestinoSelecionada: any = undefined;
  dataHoje: any = new Date().toISOString();

  constructor(private fb: FormBuilder,
    private estadoService: EstadoService, private empresaService: EmpresaService,
    private freteService: FreteService, private alertCtrl: AlertController, private loadingController: LoadingController) { }

  ngOnInit() {
    this.formFrete = this.fb.group({
      empresaId: ['', Validators.required],
      estado_origem: ['', Validators.required],
      cidade_origem: ['', Validators.required],
      estado_destino: ['', Validators.required],
      cidade_destino: ['', Validators.required],
      veiculoId: ['', Validators.required],
      carroceriaId: ['', Validators.required],
      preco: [''],
      peso: ['', Validators.required],
      produto: ['', Validators.required],
      especieId: ['', Validators.required],
      agenciamento: [false, Validators.required],
      rastreamento: [false, Validators.required],
      lona: [false, Validators.required],
      descricao: [''],
      data_coleta: ['', Validators.required],
      data_entrega: ['', Validators.required],
    })
    this.carregaEstados();
    this.carregaEmpresa();
  }

  carregaEmpresa() {
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  carregaEstados() {
    this.estadoService.getEstados().subscribe(data => {
      this.estados = data;
    });
  }

  onChange() {
    this.estadoService.getMunicipios(this.estadoSelecionado.id).subscribe(data => {
      this.municipios = [];
      this.municipios = data;
    });
  }

  onChangeDestino() {
    this.estadoService.getMunicipios(this.estadoDestinoSelecionado.id).subscribe(data => {
      this.municipios = [];
      this.municipios = data;
    });
  }

  async cadastrar() {
    var loading = this.loadingController.create({
      message: 'Carregando'
    });
    (await loading).present();
    var params: FreteTO = this.formFrete.getRawValue();
    /*params.sg_estado_origem = this.formFrete.get('estado_origem').value.sigla;
    params.nm_cidade_origem = this.formFrete.get('cidade_origem').value.nome;
    params.sg_estado_destino = this.formFrete.get('estado_destino').value.sigla;
    params.nm_cidade_destino = this.formFrete.get('cidade_destino').value.nome;*/

    params.estado_origem = this.formFrete.get('estado_origem').value.id.toString();
    params.cidade_origem = this.formFrete.get('cidade_origem').value.id.toString();
    params.estado_destino = this.formFrete.get('estado_destino').value.id.toString();
    params.cidade_destino = this.formFrete.get('cidade_destino').value.id.toString();
    params.ativo = true;
    params.preco = this.formFrete.get('preco').value.toString();
    params.peso = this.formFrete.get('peso').value.toString();

    console.log(params);
    this.freteService.postFrete(params).subscribe(async(data: any) => {      
      console.log(data);
      if (data.fretes.id == null)
        this.alerta('Erro ao cadastrar frete.');
      else {
        this.alerta('Frete cadastrado com sucesso.');
      }
      (await loading).dismiss();
    });
  }

  async alerta(mensagem) {
    var alert = await this.alertCtrl.create({
      message: mensagem,
      buttons: ['Ok'],
    });
    alert.present();
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.formFrete.get('data_coleta').setValue(date, {
      onlyself: true
    });
    console.log(this.formFrete.get('data_coleta').value);
  }

  getDateEntrega(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.formFrete.get('data_entrega').setValue(date, {
      onlyself: true
    });
    console.log(this.formFrete.get('data_entrega').value);
  }

}
