import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FreteTO } from 'src/model/FreteTO';

@Injectable({
  providedIn: 'root'
})
export class FreteService {
  //url: string = 'http://localhost:3030/fretes';
  url: string = 'https://tccfretes.herokuapp.com/fretes';

  constructor(private httpClient: HttpClient) { }

  getFretes() {
    return this.httpClient.get<any[]>(this.url);
  }

  getFreteByid(id) {
    return this.httpClient.get<any>(this.url + '/' + id);
  }

  postFrete(frete: FreteTO) {
    return this.httpClient.post(this.url, frete);
  }

}
