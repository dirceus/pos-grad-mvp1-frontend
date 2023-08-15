import { Component } from '@angular/core';

interface TipoQuestao {
  descricao: string;
  valor: string;
}

interface Disciplina {
  descricao: string;
  valor: string;
}

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  tipos: TipoQuestao[] = [
    {descricao: 'Múltipla Escolha', valor: 'MULTIPLA_ESCOLHA'},
    {descricao: 'Verdadeiro ou Falso', valor: 'VERDADEIRO_FALSO'},
  ];

  disciplinas: Disciplina[] = [
    {descricao: 'Biologia', valor: 'BIOLOGIA'},
    {descricao: 'Ciências', valor: 'CIENCIAS'},
    {descricao: 'Direito', valor: 'DIREITO'},
    {descricao: 'Física', valor: 'FISICA'},
    {descricao: 'Geografia', valor: 'GEOGRAFIA'},
    {descricao: 'História', valor: 'HISTORIA'},
    {descricao: 'Infomática', valor: 'INFORMATICA'},
    {descricao: 'Matemática', valor: 'MATEMATICA'},
    {descricao: 'Química', valor: 'QUIMICA'},
    {descricao: 'Português', valor: 'PORTUGUES'},
  ];


}
