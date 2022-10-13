import { HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@NgModule()

export class VeiculoService {
    private url: string = 'http://localhost:3030/';

    constructor(private httpClient: HttpClient) { }

    getVeiculo(): Observable<any> {
        var url = this.url + 'veiculos';
        return this.httpClient.get<any[]>(url, { responseType: "json" });
    }

    getVeiculoById(veiculo): Observable<any> {
        var url = this.url + 'veiculos/' + veiculo;
        return this.httpClient.get<any[]>(url, { responseType: "json" });
    }

}