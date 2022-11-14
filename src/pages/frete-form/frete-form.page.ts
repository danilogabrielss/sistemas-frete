import { Component, OnInit } from '@angular/core';
import { CarroceriaTO } from 'src/model/CarroceriaTO';
import { VeiculoTO } from 'src/model/VeiculoTO';
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
  carrocerias: CarroceriaTO[] = 
  [
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

  public estadoSelecionado: any = undefined;
  public cidadeSelecionada: any = undefined;
  constructor(private veiculoService: VeiculoService,
    private estadoService: EstadoService) { }

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
    this.carregaMunicipios();
  }

  carregaMunicipios() {
    this.estadoService.getMunicipios(this.estadoSelecionado.id).subscribe(data => {
      this.municipios = [];
      this.municipios = data;
    });
  }

}
