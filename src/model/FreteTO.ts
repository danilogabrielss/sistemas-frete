export class FreteTO {
    id: string;
    cidade_origem: string;
    ds_cidade_origem: string = '';
    cidade_destino: string;
    ds_cidade_destino: string = '';
    estado_origem: string;
    ds_estado_origem: string = '';
    estado_destino: string;
    ds_estado_destino: string = '';

    data_postagem: Date;
    data_coleta: string;
    data_entrega: string;

    descricao: string;
    preco: string;
    peso: string;
    produto: string;
    tipo_carga: string;
    forma_de_pagamento: string;
    lona: boolean;
    ativo: boolean;
    agenciamento: boolean;
    rastreamento: boolean;
    pedagio: boolean;

}