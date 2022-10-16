import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private httpClient: HttpClient) { }
  urlEstado: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

  urlMunicipios: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'


  getEstados() {
    return this.httpClient.get<any[]>(this.urlEstado, { responseType: "json" });
  }

  getMunicipios(idEstado: any) {
    return this.httpClient.get<any[]>(this.urlMunicipios + idEstado + '/municipios', { responseType: "json" });
  }

}
