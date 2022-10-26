import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreteService {
  url = 'http://localhost:3030/fretes';
  constructor(private httpClient: HttpClient) { }

  getFretes(){
    return this.httpClient.get<any[]>(this.url, { responseType: "json" });
  }

  /*public getMessages(): Frete[] {
    return this.messages;
  }

  public getMessageById(id: number): Frete {
    return this.messages[id];
  }*/
}
