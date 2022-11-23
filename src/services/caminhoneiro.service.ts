import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaminhoneiroTO } from 'src/model/CaminhoneiroTO';

@Injectable({
  providedIn: 'root'
})
export class CaminhoneiroService {
  //url: string = 'http://localhost:3030/Caminhoneiros';
  url: string = 'https://tccfretes.herokuapp.com/Caminhoneiros';
  constructor(private httpClient: HttpClient) { }

  getCaminhoneiro() {
    return this.httpClient.get<any[]>(this.url);
  }

  getCaminhoneirosByid(id) {
    return this.httpClient.get<any>(this.url + '/' + id);
  }

  postCaminhoneiro(empresa: CaminhoneiroTO) {
    return this.httpClient.post(this.url, empresa);
  }

}
