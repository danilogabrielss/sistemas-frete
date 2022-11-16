import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { CarroceriaTO } from 'src/model/CarroceriaTO';
import { FiltroFreteTO } from 'src/model/FiltroFreteTO';
import { VeiculoTO } from 'src/model/VeiculoTO';
import { EstadoService } from 'src/services/estado.service';

@Component({
  selector: 'app-filtro-frete',
  templateUrl: './filtro-frete.page.html',
  styleUrls: ['./filtro-frete.page.scss'],
})
export class FiltroFretePage implements OnInit {

  filtroFreteForm: FormGroup;

  public estados: any[] = [];
  public municipios: any[] = [];

  public estadosDestino: any[] = [];
  public municipiosDestino: any[] = [];

  public estado_origem: any = undefined;
  public cidade_origem: any = undefined;
  public estado_destino: any = undefined;
  public cidade_destino: any = undefined;
  public veiculo: number = null;
  public carroceria: number = null;
  public rastreamento: boolean = null;
  public agenciamento: boolean = null;

  filtro: FiltroFreteTO;

  veiculos: VeiculoTO[] = [
    {
      id: '0',
      veiculo: "Rodotrem"
    },
    {
      id: '1',
      veiculo: "Bitrem"
    },
    {
      id: '2',
      "veiculo": "Vanderleia"
    },
    {
      id: '3',
      "veiculo": "Carreta LS"
    },
    {
      id: '4',
      "veiculo": "Carreta"
    },
    {
      id: '5',
      "veiculo": "Bitruck"
    },
    {
      id: '6',
      "veiculo": "Truck"
    },
    {
      id: '7',
      "veiculo": "Toco"
    },
    {
      id: '8',
      "veiculo": "3/4"
    },
    {
      id: '9',
      "veiculo": "VLC"
    },
    {
      id: '10',
      "veiculo": "Fiorino"
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
  ];

  constructor(private modalCtrl: ModalController, public fb: FormBuilder, private estadoService: EstadoService, private navParams: NavParams) { }

  ngOnInit() {
    this.filtroFreteForm = this.fb.group({
      estado_origem: [''],
      cidade_origem: [''],
      data_inicio: [''],
      estado_destino: [''],
      cidade_destino: [''],
      veiculo: [''],
      carroceria: [''],
      rastreamento: [''],
      agenciamento: [''],
    });
    this.carregaEstados();
    this.filtro = this.navParams.get('filtro');
    console.log(this.filtro);
    /*this.filtroFreteForm.get('estado_origem').setValue(this.filtro.estado_origem);
    console.log('filtro.estado_origem - ' + this.filtro.estado_origem);
    console.log(this.filtroFreteForm.controls);*/

  }

  voltarTelaFrete() {
    this.modalCtrl.dismiss();
  }

  carregaEstados() {
    this.estadoService.getEstados().subscribe(data => {
      this.estados = data;
      this.estadosDestino = data
    });
  }

  onChange() {
    this.carregaMunicipios();
  }

  carregaMunicipios() {
    this.estadoService.getMunicipios(this.estado_origem).subscribe(data => {
      this.municipios = [];
      this.municipios = data;
    });
  }

  onChangeDestino() {
    this.carregaMunicipiosDestino();
  }

  carregaMunicipiosDestino() {
    this.estadoService.getMunicipios(this.estado_destino).subscribe(data => {
      this.municipiosDestino = [];
      this.municipiosDestino = data;
    });
  }

  setMesoregiao() {
    document.getElementById('inputMesoRegOrigem').innerHTML = this.cidade_origem.microrregiao.mesorregiao.nome;
  }

  setMesoregiaoDestino() {
    document.getElementById('inputMesoRegDestitno').innerHTML = this.cidade_destino.microrregiao.mesorregiao.nome;
  }

  filtrar() {
    this.filtro = this.filtroFreteForm.getRawValue();
    this.modalCtrl.dismiss({ 'filtro': this.filtro });
  }

}
