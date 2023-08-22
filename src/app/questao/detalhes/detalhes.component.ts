import { Component, Input, OnInit } from '@angular/core';
import { QuestaoService } from '../questao.service';
import { QuestaoCompleta } from '../questao.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent  implements OnInit {

  @Input() codigo: number;
  questao: QuestaoCompleta; 


  constructor(private questaoService: QuestaoService){}

  ngOnInit(): void {
    this.obterQuestao(this.codigo);
  }


  obterQuestao(codigo: number) {
    this.questaoService.obterPorId(codigo).subscribe({
      next: (questao) => {
        this.questao = questao;
      },
      error: (e) => console.error(e)
    })
  }


}
