import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltroFreteTO } from 'src/model/FiltroFreteTO';
import { FreteTO } from 'src/model/FreteTO';

@Injectable({
  providedIn: 'root'
})
export class FreteService {
  //url: string = 'http://localhost:3030/fretes';
  url: string = 'https://tccfretes.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  getFretes() {
    return this.httpClient.get<FreteTO[]>(this.url + 'fretes');
  }

  getFreteByid(id) {
    return this.httpClient.get<any>(this.url + 'fretes' + '/' + id);
  }

  postFrete(frete: FreteTO) {
    return this.httpClient.post(this.url + 'fretes', frete);
  }

  /*filtroFrete(filtro: FiltroFreteTO) {
    return this.httpClient.get<FreteTO[]>(this.url + 'fretes_filter');
  }*/

}
