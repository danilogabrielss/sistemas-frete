import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login-caminhoneiro',
  templateUrl: './login-caminhoneiro.page.html',
  styleUrls: ['login-caminhoneiro.page.scss'],
})
export class LoginCaminhoneiroPage implements OnInit {
  loginForm: FormGroup;
  empresa: boolean;
  constructor(public fb: FormBuilder, public navCtrl: NavController, public alertCtrl: AlertController, public loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.alertCtrl.create();
  }

  logar() {
    var params: { email, senha };
    params = {
      email: this.loginForm.controls.email.value,
      senha: this.loginForm.controls.senha.value
    }

    this.loginService.logarCaminhoneiro(params).subscribe(data => {
      this.alerta(data.mensagem);
    }, error => {
      var mensagemAlerta: string = '';
      error.error.errors.forEach(element => {
        var ultimoErro = error.error.errors[error.error.errors.length - 1];
        if (element != ultimoErro)
          mensagemAlerta += element.msg + ', ';
        else {
          mensagemAlerta += element.msg
        }
      });
      document.getElementById('lblErro').innerHTML = mensagemAlerta;
    });
  }



  async alerta(mensagem) {
    var alert = await this.alertCtrl.create({
      message: mensagem,
      buttons: ['Ok'],
    });
    alert.present();
  }

}
