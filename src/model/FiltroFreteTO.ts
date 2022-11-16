export class FiltroFreteTO {
    id: string = undefined;
    cidade_origem: string = undefined;
    ds_cidade_origem: string = undefined;
    cidade_destino: string = undefined;
    ds_cidade_destino: string = undefined;
    estado_origem: string = undefined;
    ds_estado_origem: string = undefined;
    estado_destino: string = undefined;
    ds_estado_destino: string = undefined;

    tipo_carga: string = undefined;
    lona: boolean;
    agenciamento: boolean;
    rastreamento: boolean;
}