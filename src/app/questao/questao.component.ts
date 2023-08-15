import { Component } from '@angular/core';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent {

  showFiltro: Boolean = true;
  showListagem: Boolean = true;
  showCadastro: Boolean = false;
  showDetalhes: Boolean = false;


  constructor() { 
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
    console.log("entrou?")
    this.showFiltro = false;
    this.showListagem = false;
    this.showCadastro = false;
    this.showDetalhes = true;
  }

}
