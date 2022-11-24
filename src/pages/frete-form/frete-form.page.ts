import { Component, OnInit } from '@angular/core';
import { CarroceriaTO } from 'src/model/CarroceriaTO';
import { VeiculoTO } from 'src/model/VeiculoTO';
import { EmpresaService } from 'src/services/empresa.service';
import { EstadoService } from 'src/services/estado.service';
import { VeiculoService } from 'src/services/veiculo.service';


@Component({
  selector: 'app-frete-form',
  templateUrl: './frete-form.page.html',
  styleUrls: ['./frete-form.page.scss'],
})
export class FreteFormPage implements OnInit {

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
  public estados: any[] = [];
  public municipios: any[] = [];

  public estadosDestino: any[] = [];
  public municipiosDestino: any[] = [];

  public estadoSelecionado: any = undefined;
  public cidadeSelecionada: any = undefined;

  public estadoDestinoSelecionado: any = undefined;
  public cidadeDestinoSelecionada: any = undefined;
  constructor(private veiculoService: VeiculoService,
    private estadoService: EstadoService, private empresaService: EmpresaService) { }

  ngOnInit() {
    this.carregaEstados();
  }

  carregaVeiculo() {
    this.veiculoService.getVeiculo().subscribe(data => {
      this.veiculos = data;
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

}
