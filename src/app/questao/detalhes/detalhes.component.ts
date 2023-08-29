import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { QuestaoService } from '../questao.service';
import { QuestaoCompleta } from '../questao.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent  implements OnInit, AfterViewInit {

  @Input() codigo: number;
  questao: QuestaoCompleta; 


  constructor(private questaoService: QuestaoService){}

  ngAfterViewInit(): void {
    this.obterQuestao(this.codigo);
  }

  ngOnInit(): void {
    
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
