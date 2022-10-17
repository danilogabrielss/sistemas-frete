import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:3030/';

  constructor(private httpClient: HttpClient) { }

  logarCaminhoneiro(params): Observable<any> {
    var url = this.url + 'login/caminhoneiro';
    return this.httpClient.post(url, params);
  }

  logarEmpresa(params): Observable<any> {
    var url = this.url + 'login/empresa';
    return this.httpClient.post(url, params);
  }

}
