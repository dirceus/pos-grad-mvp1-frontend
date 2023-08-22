import { Component } from '@angular/core';

import { NotifierService } from 'angular-notifier';
import { QuestaoService } from './questao.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent {


  private notifier: NotifierService;

  showFiltro: Boolean = true;
  showListagem: Boolean = true;
  showCadastro: Boolean = false;
  showDetalhes: Boolean = false;

  codigoQuestaoSelecionada: number;

  constructor(private questaoService: QuestaoService, notifierService: NotifierService){
    this.notifier = notifierService;
    this.irListagem()
  }

  irListagem() {
    this.showFiltro = true;
    this.showListagem = true;
    this.showCadastro = false;
    this.showDetalhes = false;
  }

  irCadastro() {
    this.showFiltro = false;
    this.showListagem = false;
    this.showCadastro = true;
    this.showDetalhes = false;
  }

  irDetalhes(codigo : number) {
    this.showFiltro = false;
    this.showListagem = false;
    this.showCadastro = false;
    this.showDetalhes = true;

    this.codigoQuestaoSelecionada = codigo
  }

  excluirQuestao(codigo : number){
    this.questaoService.excluir(codigo)
    .subscribe({
      next: () => {
        this.notifier.notify('success', 'Questão excluída com sucesso');
        this.questaoService.pesquisarQuestoes.next(null)
        this.irListagem()
      },
      error: (e) => {
        this.notifier.notify('error', e.message);
      }
    })
  }


}
