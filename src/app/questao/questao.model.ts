export class QuestaoSimplificada {
  codigo: number
  tipo: string;
  disciplina: string;
  ano: number;
  instituicao: string;
  evento: string;
  enunciado: string;
}

export class CadastroQuestaoRequest{
  tipo: string;
  disciplina: string;
  ano: number;
  instituicao: string;
  evento: string;
  enunciado: string;
}

export class FiltroQuestaoRequest{
  tipo: string;
  disciplina: string;
  ano: number;
  instituicao: string;
  evento: string;
  enunciado: string;
}

export enum TipoQuestaoEnum {
    MULTIPLA_ESCOLHA = "Múltipla Escolha",
    VERDADEIRO_OU_FALSO = "Verdadeiro ou Falso",
}