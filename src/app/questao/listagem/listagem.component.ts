import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { QuestaoService } from '../questao.service';
import { FiltroQuestaoRequest, QuestaoSimplificada } from '../questao.model';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'tipo', 'disciplina', 'ano', 'instituicao','evento','enunciado','acoes'];
  dataSource = new MatTableDataSource<QuestaoSimplificada>;
  @Output() irDetalhesEvent = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questaoService: QuestaoService){}

  ngOnInit(): void {
    this.obterQuestoes();
  }

  obterQuestoes(){
    this.questaoService.obterTodos().subscribe({
      next: (questoes) => {
        this.dataSource.data = questoes;
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.error(e)
    })
  }


  pesquisarQuestoes(filtro : FiltroQuestaoRequest){
    this.questaoService.obterTodos().subscribe({
      next: (questoes) => {
        this.dataSource.data = questoes;
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.error(e)
    })
  }


  verDetalhes(codigo : number){
    this.irDetalhesEvent.next(codigo);
  }
  

}


