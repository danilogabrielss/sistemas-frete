export class FreteTO {
    id: string;
    cidade_origem: string;
    cidade_destino: string;
    estado_origem: string;
    estado_destino: string;

    nm_cidade_origem: string;
    nm_cidade_destino: string;
    sg_estado_origem: string;
    sg_estado_destino: string;

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
    empresaId: number;
}