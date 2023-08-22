import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, of, share } from 'rxjs';
import { QuestaoSimplificada, CadastroQuestaoRequest, QuestaoCompleta, FiltroQuestaoRequest, TipoQuestao, Disciplina, Assunto, OrigemQuestao} from './questao.model';


const baseUrl = 'http://localhost:5000/api/questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {
    

    pesquisarQuestoes = new Subject<FiltroQuestaoRequest|null>();

    constructor(private http: HttpClient) { }

    obterPorId(id: number): Observable<QuestaoCompleta> {
        return this.http.get<QuestaoCompleta>(`${baseUrl}/exibir/${id}`).pipe(share());
    }

    excluir(id: number): Observable<Boolean> {
        return this.http.delete<Boolean>(`${baseUrl}/excluir/${id}`);
    }

    obterTodos(): Observable<QuestaoSimplificada[]> {
        return this.http.get<QuestaoSimplificada[]>(`${baseUrl}/listar`).pipe(share());
    }

    obterPorFiltro(filtro: FiltroQuestaoRequest): Observable<QuestaoSimplificada[]> {
        let params = new HttpParams();
        params = (filtro.tipo)          ? params.append("tipo", filtro.tipo)                : params;
        params = (filtro.disciplina)    ? params.append("disciplina", filtro.disciplina)    : params;
        params = (filtro.ano)           ? params.append("ano", filtro.ano)                  : params;
        params = (filtro.instituicao)   ? params.append("instituicao", filtro.instituicao)  : params;
        params = (filtro.origem)        ? params.append("origem", filtro.origem)            : params;
        return this.http.get<QuestaoSimplificada[]>(`${baseUrl}/buscar`, { params:params} ).pipe(share());
    }


    cadastrar(data: CadastroQuestaoRequest): Observable<any> {
        return this.http.post<QuestaoSimplificada>(`${baseUrl}/cadastrar`, data);
    }

    obterTiposQuestao(){
        return TIPOS
    }

    obterDisciplinas(){
        return DISICPLINAS
    }

    obterOrigens(){
        return ORIGENS
    }

    obterAssuntosPorDisciplina(disciplina: string): Observable<Assunto[]>{
        if(disciplina){
            let params = new HttpParams();
            params = params.append("disciplina", disciplina)             
            return this.http.get<Assunto[]>(`${baseUrl}/assuntos`, { params:params} ).pipe(share());
        }
        return of([])
    }
    

}

const TIPOS: TipoQuestao[] = [
    {descricao: 'Múltipla Escolha', codigo: 'MULTIPLA_ESCOLHA'},
    {descricao: 'Verdadeiro ou Falso', codigo: 'VERDADEIRO_FALSO'},
  ];

const DISICPLINAS: Disciplina[] = [
    {descricao: 'Biologia', codigo: 'BIOLOGIA'},
    {descricao: 'Direito', codigo: 'DIREITO'},
    {descricao: 'Física', codigo: 'FISICA'},
    {descricao: 'Geografia', codigo: 'GEOGRAFIA'},
    {descricao: 'Inglês', codigo: 'INGLÊS'},
    {descricao: 'História', codigo: 'HISTORIA'},
    {descricao: 'Informática', codigo: 'INFORMATICA'},
    {descricao: 'Matemática', codigo: 'MATEMATICA'},
    {descricao: 'Química', codigo: 'QUIMICA'},
    {descricao: 'Português', codigo: 'PORTUGUES'},
  ];

  const ORIGENS: OrigemQuestao[] = [
    {descricao: 'Vestibular', codigo: 'VESTIBULAR'},
    {descricao: 'Concurso', codigo: 'CONCURSO'},
    {descricao: 'Certificação', codigo: 'CERTIFICACAO'},
    {descricao: 'Outros', codigo: 'OUTROS'},
  ];
