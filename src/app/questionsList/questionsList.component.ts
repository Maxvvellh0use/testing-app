import { Component, OnInit } from '@angular/core';
import {QuestionData} from '../types';
import {jsTestData} from '../data/jsTestData';
import {getRandomSort} from './helpers/getRandomSort';

@Component({
  selector: 'app-answers-list',
  templateUrl: './questionsList.component.html',
  styleUrls: ['./questionsList.component.scss'],
})

export class QuestionsListComponent implements OnInit {
  questionsData: QuestionData[] = jsTestData;

  checkTest = () => {

  }

  ngOnInit(): void {
    // this.allAnswers = jsTestData.map(data => {
    //   return getRandomSort([...data.answerOptions.incorrect, data.answerOptions.correct]);
    // });
  }
}
