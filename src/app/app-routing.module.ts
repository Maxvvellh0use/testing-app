import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultWindowComponent} from './resultWindow/resultWindow.component';
import {QuestionsListComponent} from './questionsList/questionsList.component';

const routes: Routes = [
  { path: '', component: QuestionsListComponent },
  { path: 'result-window-component', component: ResultWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
