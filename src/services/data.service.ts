import { Injectable } from '@angular/core';
import { FreteTO } from 'src/model/FreteTO';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public fretes: FreteTO[] = [
    {
      id: '1',
      cidade_origem: 'Santos',
      estado_origem: 'SP',
      cidade_destino: 'Guarulhos',
      estado_destino: 'SP',
      data_postagem: '07/10/2022',
      data_coleta: '07/10/2022',
      data_entrega: '10/10/2022',
      descricao: 'Container de 20',
      /*veiculo: 'Carreta LS',
      carroceiria: 'Porta Container',
      valor: 1500,
      produto: 'Container 40 pés'*/
    }, {
      id: '1',
      cidade_origem: 'Cubatão',
      estado_origem: 'SP',
      cidade_destino: 'Campinas',
      estado_destino: 'SP',
      data_postagem: '07/10/2022',
      data_coleta: '07/10/2022',
      data_entrega: '10/10/2022',
      descricao: 'Container de 40',
      /*   
      veiculo: 'Bitrem',
      carroceiria: 'Graneleiro',
      valor: 2200,
      produto: 'Adubo'*/
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getFretes(): FreteTO[] {
    return this.fretes;
  }
}
