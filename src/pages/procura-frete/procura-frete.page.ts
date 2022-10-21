import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadoService } from 'src/services/estado.service';

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
  public estado_origem: any = undefined;
  public cidade_origem: any = undefined;
  /*estado_destino,
      estado_origem,
      data_inicio,*/
  public data_inicio = undefined;

  constructor(public fb: FormBuilder, private estadoService: EstadoService) { }

  ngOnInit() {
    //this.data_inicio = this.dataHoje;
    this.procuraFreteForm = this.fb.group({
      estado_origem: ['', Validators.required],
      cidade_origem: ['', Validators.required],
      data_inicio: ['', Validators.required],
    });
    this.carregaEstados();
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
    this.estadoService.getMunicipios(this.estado_origem.id).subscribe(data => {
      this.municipios = [];
      this.municipios = data;
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
