import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcuraFreteService {
  url: string = 'http://localhost:3030/procura_fretes';
  //url: string = 'https://tccfretes.herokuapp.com/procura_fretes';
  constructor(private httpClient: HttpClient) { }

  getProcuraFrete() {
    return this.httpClient.get<any[]>(this.url);
  }

  getProcuraFreteByid(id) {
    return this.httpClient.get<any>(this.url + '/' + id);
  }

  postProcuraFrete(procuraFrete) {
    return this.httpClient.post(this.url, procuraFrete);
  }

}
