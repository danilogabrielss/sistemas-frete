import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadoService } from 'src/services/estado.service';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-procura-frete',
  templateUrl: './procura-frete.page.html',
  styleUrls: ['./procura-frete.page.scss'],
})
export class ProcuraFretePage implements OnInit {

  procuraFreteForm: FormGroup;
  dataHoje: any = new Date().toISOString();

  public estados: any[] = [];
  public municipios: any[] = [];

  public estadosDestino: any[] = [];
  public municipiosDestino: any[] = [];

  public estado_origem: any = undefined;
  public cidade_origem: any = undefined;
  public estado_destino: any = undefined;
  public cidade_destino: any = undefined;
  public data_inicio = undefined;

  constructor(public fb: FormBuilder, private estadoService: EstadoService) { }

  ngOnInit() {
    this.procuraFreteForm = this.fb.group({
      estado_origem: ['', Validators.required],
      cidade_origem: ['', Validators.required],
      data_inicio: ['', Validators.required],
      estado_destino: ['', Validators.required],
      cidade_destino: ['', Validators.required],
    });
    this.carregaEstados();
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
    console.log(this.procuraFreteForm.controls);
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.procuraFreteForm.get('data_inicio').setValue(date, {
      onlyself: true
    });
  }

}
