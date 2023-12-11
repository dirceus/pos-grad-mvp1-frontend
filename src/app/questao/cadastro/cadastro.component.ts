import { Component } from '@angular/core';
import { AlternativaRequest, Assunto, CadastroQuestaoRequest, Disciplina, OrigemQuestao, TipoQuestao } from '../questao.model';
import { QuestaoService } from '../questao.service';
import { NotifierService } from 'angular-notifier';
import { share, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  private notifier: NotifierService;

  constructor(private questaoService: QuestaoService, notifierService: NotifierService){
    this.notifier = notifierService;
  }


  questao = new CadastroQuestaoRequest()
  alternativa_1 = new AlternativaRequest()
  alternativa_2 = new AlternativaRequest()
  alternativa_3 = new AlternativaRequest()
  alternativa_4 = new AlternativaRequest()
  alternativa_5 = new AlternativaRequest()
  tipos: TipoQuestao[] = this.questaoService.obterTiposQuestao()
  disciplinas: Disciplina[] = this.questaoService.obterDisciplinas()
  origens: OrigemQuestao[] = this.questaoService.obterOrigens()
  assuntos: Assunto[] = []
  

  carregandoAssuntos: Boolean = false

  atualizarAssuntos(disciplina: any){
    
    this.questao.assuntos = []
    this.questaoService.obterAssuntosPorDisciplina(disciplina)
    .pipe(share())
    .subscribe({
      next: (assuntos) => {
        this.assuntos = assuntos;
      },
      error: (e) => console.error(e)
    })
  }

  obterDisciplina(){
    this.questaoService.obterDisciplina(this.questao.enunciado).pipe(share())
    .subscribe({
      next: (discplina) => {
          this.questao.disciplina = discplina._value_
          this.atualizarAssuntos(discplina._value_)
      },
      error: (e) => console.error(e)
    })
  }


  salvar(){
    
    this.preparaQuestao()
    this.validarQuestao()

    this.questaoService.cadastrar(this.questao)
    .pipe(share())
    .subscribe({
      next: (questaoResponse) => {
        this.notifier.notify('success', 'Questão salva com sucesso');
        this.limpar();
      },
      error: (e) => {
        this.notifier.notify('error', e.message);
      }
    })
  }

    limpar(){
      this.questao = new CadastroQuestaoRequest()
      this.alternativa_1 = new AlternativaRequest()
      this.alternativa_2 = new AlternativaRequest()
      this.alternativa_3 = new AlternativaRequest()
      this.alternativa_4 = new AlternativaRequest()
      this.alternativa_5 = new AlternativaRequest()
    }
    
    preparaQuestao() {
      this.questao.alternativas = []
      this.questao.alternativas.push(this.alternativa_1)
      this.questao.alternativas.push(this.alternativa_2)
      this.questao.alternativas.push(this.alternativa_3)
      if(this.alternativa_4.descricao){
        this.questao.alternativas.push(this.alternativa_4)
      }
      if(this.alternativa_5.descricao){
        this.questao.alternativas.push(this.alternativa_5)
      }
    }

    validarQuestao() {}


}


