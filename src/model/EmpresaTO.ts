export class EmpresaTO {
    cnpj: string;
    nome: string;
    email: string;
    descricao: string;
    imagem_perfil: string;
    senha: string;
    Contatos_empresa: ContatoEmpresaTO[];
}

export class ContatoEmpresaTO {
    id: number;
    telefone: string;
    celular: string;
    facebook: string;
    whatsapp: string;
    linkedin: string;
    telegram: string;
    empresaId: string;
}