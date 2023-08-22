import { Component, EventEmitter, Output } from '@angular/core';
import { Disciplina, FiltroQuestaoRequest, OrigemQuestao, TipoQuestao } from '../questao.model';
import { QuestaoService } from '../questao.service';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  constructor(private questaoService: QuestaoService){}

  filtro : FiltroQuestaoRequest = new FiltroQuestaoRequest()

  tipos: TipoQuestao[] = this.questaoService.obterTiposQuestao()

  disciplinas: Disciplina[] = this.questaoService.obterDisciplinas()

  origens: OrigemQuestao[] = this.questaoService.obterOrigens()
  
  limpar(){
    this.filtro = new FiltroQuestaoRequest()
  }


  pesquisar(){
    this.questaoService.pesquisarQuestoes.next(this.filtro);
  }

}
