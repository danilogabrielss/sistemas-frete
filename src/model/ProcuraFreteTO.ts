export class ProcuraFreteTO {
    cpf: string;
    cidade_origem: string;
    ds_cidade_origem: string = '';
    cidade_destino: string;
    ds_cidade_destino: string = '';
    estado_origem: string;
    ds_estado_origem: string = '';
    estado_destino: string;
    ds_estado_destino: string = '';

    ativo: boolean;
    agenciamento: boolean;
    rastreamento: boolean;
    pedagio: boolean;

}