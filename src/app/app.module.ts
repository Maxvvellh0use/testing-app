import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

import {QuestionsListComponent} from './questionsList/questionsList.component';
import {FormsModule} from '@angular/forms';
import {ResultWindowComponent} from './resultWindow/resultWindow.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    ResultWindowComponent,
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule ,
    BrowserAnimationsModule ,
    MatFormFieldModule ,
    MatRadioModule ,
    MatButtonModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
