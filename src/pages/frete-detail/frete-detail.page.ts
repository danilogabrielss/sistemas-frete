import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FreteTO } from 'src/model/FreteTO';

@Component({
  selector: 'app-frete-detail',
  templateUrl: './frete-detail.page.html',
  styleUrls: ['./frete-detail.page.scss'],
})
export class FreteDetailPage implements OnInit {

  idFrete: any;
  frete: FreteTO;

  constructor(private router: ActivatedRoute, private navCtrl: NavController,
  ) {
    this.router.params.subscribe((params: FreteTO) => {
      this.frete = params;
    });
  }

  ngOnInit() { }

  voltarTelaFrete() {
    this.navCtrl.back();
  }

}
