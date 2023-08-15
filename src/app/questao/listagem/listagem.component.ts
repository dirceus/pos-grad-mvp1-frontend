import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements AfterViewInit {
  displayedColumns: string[] = ['codigo', 'tipo', 'disciplina', 'ano', 'instituicao','evento','enunciado','acoes'];
  dataSource = new MatTableDataSource<QuestaoSimplificada>(ELEMENT_DATA);
  @Output() irDetalhesEvent = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  verDetalhes(codigo : number){
    console.log("entrou?1")
    this.irDetalhesEvent.next(codigo);
  }
  

}

export interface QuestaoSimplificada {
  codigo: number
  tipo: string;
  disciplina: string;
  ano: number;
  instituicao: string;
  evento: string;
  enunciado: string;
}

const ELEMENT_DATA: QuestaoSimplificada[] = [
  {codigo: 1, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2020, instituicao: 'UFBA', evento: 'Concurso Analista TIC', enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 2, tipo: 'Verdadeiro ou Falso', disciplina: 'Informática', ano: 2021, instituicao: 'PUC-RIO',evento: 'Concurso Professor Substituto', enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 3, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2021, instituicao: 'MEC', evento: 'Enem 2021',enunciado: 'Selecione a alternativa correta, sobre ...'}, 
  {codigo: 4, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2022, instituicao: 'MEC', evento: 'Enem 2022',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 5, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2022, instituicao: 'UFAL', evento: 'Concurso Tec. Administrativo',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 6, tipo: 'Verdadeiro ou Falso', disciplina: 'Informática', ano: 2020, instituicao: 'PUC-RIO', evento: 'Exercício 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 7, tipo: 'Nitrogen', disciplina: 'Informática', ano: 2021, instituicao: 'PUC-RIO', evento: 'Exercício 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 8, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2021, instituicao: 'PUC-RIO', evento: 'Exercício 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 9, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2022, instituicao: 'PUC-RIO', evento: 'Exercício 2 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 10, tipo: 'Verdadeiro ou Falso', disciplina: 'Informática', ano: 2022, instituicao: 'PUC-RIO', evento: 'Exercício 2 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 11, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2023, instituicao: 'PUC-RIO', evento: 'Exercício 2 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 12, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2023, instituicao: 'PUC-RIO', evento: 'Avaliação 1 - Pos-Graduação', enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 13, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2023, instituicao: 'PUC-RIO', evento: 'Avaliação 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 14, tipo: 'Verdadeiro ou Falso', disciplina: 'Informática', ano: 2022, instituicao: 'PUC-RIO', evento: 'Avaliação 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 15, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2022, instituicao: 'PUC-RIO', evento: 'Avaliação 2 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 16, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2021, instituicao: 'PUC-RIO', evento: 'Avaliação 2 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 17, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2019, instituicao: 'PUC-RIO', evento: 'Avaliação 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 18, tipo: 'Verdadeiro ou Falso', disciplina: 'Informática', ano: 2021, instituicao: 'PUC-RIO', evento: 'Avaliação 2 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 19, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2018, instituicao: 'PUC-RIO', evento: 'Avaliação 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
  {codigo: 20, tipo: 'Múltipla Escolha', disciplina: 'Informática', ano: 2020, instituicao: 'PUC-RIO', evento: 'Avaliação 1 - Pos-Graduação',enunciado: 'Selecione a alternativa correta, sobre ...'},
];