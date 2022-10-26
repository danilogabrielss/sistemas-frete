import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FreteTO } from 'src/model/FreteTO';
import { FreteService } from 'src/services/frete.service';

@Component({
  selector: 'app-frete-detail',
  templateUrl: './frete-detail.page.html',
  styleUrls: ['./frete-detail.page.scss'],
})
export class FreteDetailPage implements OnInit {

  idFrete: any;
  frete: FreteTO;

  constructor(private route: ActivatedRoute, private freteService: FreteService, private navCtrl: NavController) {
    this.route.params.subscribe(params => this.idFrete = params['id']);
  }

  ngOnInit() {
    this.freteService.getFreteByid(this.idFrete).subscribe(data => {
      this.frete = data
      console.log(this.frete);
    });

  }

  voltarTelaFrete(){
    this.navCtrl.back();
  }

}
