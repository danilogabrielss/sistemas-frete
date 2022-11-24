import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { CaminhoneiroTO } from 'src/model/CaminhoneiroTO';
import { CarroceriaTO } from 'src/model/CarroceriaTO';
import { VeiculoTO } from 'src/model/VeiculoTO';
import { CaminhoneiroService } from 'src/services/caminhoneiro.service';

@Component({
  selector: 'app-caminhoneiro-form',
  templateUrl: 'caminhoneiro-form.page.html',
  styleUrls: ['caminhoneiro-form.page.scss'],
})
export class CaminhoneiroFormPage implements OnInit {

  cpf: string = null;
  caminhoneiroForm: FormGroup;
  caminhoneiro: CaminhoneiroTO;

  veiculos: VeiculoTO[] = [
    {
      "id": 9,
      "veiculo": "3/4"
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
  ];
  constructor(private fb: FormBuilder, private caminhoneiroService: CaminhoneiroService, private navParams: NavParams, private modalCtrl: ModalController) {
    this.caminhoneiroForm = this.fb.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required],
      notificacao: [false],
      carroceriaId: ['', Validators.required],
      veiculoId: ['', Validators.required],
    })
    if (this.navParams.get('caminhoneiro')) {
      this.caminhoneiro = this.navParams.get('caminhoneiro');
      this.cpf = this.caminhoneiro.cpf;
      this.caminhoneiroForm.get('cpf').setValue(this.cpf);
      this.caminhoneiroForm.get('nome').setValue(this.caminhoneiro.nome);
      this.caminhoneiroForm.get('email').setValue(this.caminhoneiro.email);
      this.caminhoneiroForm.get('celular').setValue(this.caminhoneiro.celular);
      this.caminhoneiroForm.get('notificacao').setValue(this.caminhoneiro.notificacao);
      this.caminhoneiroForm.get('carroceriaId').setValue(this.caminhoneiro.carroceriaId);
      this.caminhoneiroForm.get('veiculoId').setValue(this.caminhoneiro.veiculoId);
    }
  }

  ngOnInit() {

  }

  postCaminhoneiro() {
    console.log(this.caminhoneiroForm.getRawValue());

    this.caminhoneiro = this.caminhoneiroForm.getRawValue();

    this.caminhoneiroService.postCaminhoneiro(this.caminhoneiro).subscribe((data: any) => {
      alert.call(data.error);
    });
  }

  back() {
    this.modalCtrl.dismiss();
  }

}
