export interface QuestaoSimplificada {
    codigo: number;
    tipo: TipoQuestaoEnum;
    ano: number;
    instituicao: string;
    enunciado: string;
    evento: string;
  }

  export enum TipoQuestaoEnum {
    MULTIPLA_ESCOLHA = "Múltipla Escolha",
    VERDADEIRO_FALSO = "Verdadeiro ou Falso",
  }