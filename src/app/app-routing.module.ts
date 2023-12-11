import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestaoComponent } from './questao/questao.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'questoes',
    component: QuestaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
