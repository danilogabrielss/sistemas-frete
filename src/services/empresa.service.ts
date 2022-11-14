import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpresaTO } from 'src/model/EmpresaTO';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = 'http://localhost:3030/empresas';
  constructor(private httpClient: HttpClient) { }

  getEmpresas() {
    return this.httpClient.get<any[]>(this.url);
  }

  getEmpresasByid(id) {
    return this.httpClient.get<any>(this.url + '/' + id);
  }

  postEmpresa(empresa : EmpresaTO) {
    return this.httpClient.post(this.url, empresa);
  }

}
