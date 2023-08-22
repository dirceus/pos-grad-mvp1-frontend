export interface QuestaoSimplificada {
  codigo: number
  tipo: TipoQuestao;
  disciplina: Disciplina;
  ano: number;
  instituicao: string;
  origem: OrigemQuestao;
  origem_descricao: string;
  enunciado: string;
}

export interface QuestaoCompleta {
  codigo: number
  tipo: TipoQuestao;
  disciplina: Disciplina;
  ano: number;
  instituicao: string;
  origem: OrigemQuestao;
  origem_descricao: string;
  enunciado: string;
  alternativas: Alternativa[];
  assuntos: Assunto[];
  cadastrador: string;
  data_cadastro: Date;
  ativo: boolean;
}

export class Alternativa {
  codigo: number;
  descricao: string;
  is_correta: boolean;
}

export interface Assunto {
  codigo: number;
  disciplina: Disciplina
  descricao: string;
}

export class CadastroQuestaoRequest {
  tipo: string;
  disciplina: string;
  ano: number;
  assuntos: Assunto[] = [];
  instituicao: string;
  origem: OrigemQuestao;
  origem_descricao: string;
  enunciado: string;
  alternativas: AlternativaRequest[] = [];
}

export class AlternativaRequest {
  descricao: string;
  is_correta: boolean;
}

export class FiltroQuestaoRequest {
  tipo: string;
  disciplina: string;
  ano: number;
  instituicao: string;
  origem: string;
}

export interface TipoQuestao {
  codigo: string;
  descricao: string;
}

export interface Disciplina {
  codigo: string;
  descricao: string;
}

export interface OrigemQuestao {
  codigo: string;
  descricao: string;
}

