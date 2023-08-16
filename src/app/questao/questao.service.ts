import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestaoSimplificada, CadastroQuestaoRequest} from './questao.model';


const baseUrl = 'http://localhost:5000/api/questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

    constructor(private http: HttpClient) { }

    obterPorId(id: number): Observable<QuestaoSimplificada> {
        return this.http.get<QuestaoSimplificada>(`${baseUrl}/exibir/${id}`);
    }

    obterTodos(): Observable<QuestaoSimplificada[]> {
        return this.http.get<QuestaoSimplificada[]>(`${baseUrl}/listar`);
    }

    cadastrar(data: CadastroQuestaoRequest): Observable<any> {
        return this.http.post(baseUrl, data);
    }

}