import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public caminhoneiros: any[] = [];

  public estadosDestino: any[] = [];
  public municipiosDestino: any[] = [];

  public estado_origem: any = undefined;
  public cidade_origem: any = undefined;
  public estado_destino: any = undefined;
  public cidade_destino: any = undefined;
  public data_inicio = undefined;

  constructor(public fb: FormBuilder, private estadoService: EstadoService, private procuraFreteService: ProcuraFreteService,
    private caminhoneiroService: CaminhoneiroService) { }

  ngOnInit() {
    this.procuraFreteForm = this.fb.group({
      cpf: [''],
      estado_origem: ['', Validators.required],
      cidade_origem: ['', Validators.required],
      data_inicio: ['', Validators.required],
      estado_destino: ['', Validators.required],
      cidade_destino: ['', Validators.required],
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

  salvarProcuraFrete() {
    var params = {
      cpf: this.procuraFreteForm.get('cpf').value,
      estado_origem: this.estado_origem,
      cidade_origem: this.cidade_origem,
      data_inicio: this.data_inicio,
      estado_destino: this.estado_destino,
      cidade_destino: this.cidade_destino
    }
    console.log(params);

    this.procuraFreteService.postProcuraFrete(params).subscribe((data: any) => {
      if (data.status == 200) {
        alert.call('Sucess');
      }
    });
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.procuraFreteForm.get('data_inicio').setValue(date, {
      onlyself: true
    });
  }

}
