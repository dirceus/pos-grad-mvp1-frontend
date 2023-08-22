import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QuestaoService } from '../questao.service';
import { FiltroQuestaoRequest, QuestaoSimplificada } from '../questao.model';
import { NotifierService } from 'angular-notifier';
import { share, switchMap } from 'rxjs';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['codigo', 'tipo', 'disciplina', 'ano', 'instituicao', 'origem','origem_descricao', 'enunciado', 'acoes'];
  dataSource = new MatTableDataSource<QuestaoSimplificada>;
  @Output() irDetalhesEvent = new EventEmitter<number>();
  @Output() excluirEvent = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ultimoFiltro : FiltroQuestaoRequest = new FiltroQuestaoRequest()


  private notifier: NotifierService;

  constructor(private questaoService: QuestaoService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }


  ngOnInit(): void {
    this.obterQuestoes();
  }


  ngAfterViewInit(): void {
    //observando pesquisa com filtro
    this.questaoService.pesquisarQuestoes.subscribe(filtro =>
      this.pesquisarQuestoes(filtro))
  }


  obterQuestoes() {
    this.questaoService.obterTodos()
    .pipe(share())
    .subscribe({
      next: (questoes) => {
        this.dataSource.data = questoes;
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.error("Erro ao pesquisar questões"+e.message)
    })
  }


  pesquisarQuestoes(filtro: FiltroQuestaoRequest | null) {

    if(filtro){
      this.ultimoFiltro = filtro
    }
    this.questaoService.obterPorFiltro(this.ultimoFiltro)
    .pipe(share())
    .subscribe({
      next: (questoes) => {

        if (questoes.length == 0)
          this.notifier.notify('warning', 'A consulta não retornou resultado');

        this.dataSource.data = questoes;
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => {
      console.error("Erro ao pesquisar questões"+e.message)
      this.notifier.notify('error', 'Ocorreu um erro ao pesquisar questões');
    }})


  }


  verDetalhes(codigo: number) {
    this.irDetalhesEvent.next(codigo);
  }

  excluir(codigo: number) {
    this.excluirEvent.next(codigo);
  }


}


