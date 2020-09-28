import { Component } from '@angular/core';
import {Answers , QuestionData} from '../types';
import {jsTestData} from '../data/jsTestData';
import {NgForm} from '@angular/forms';
import {ActivatedRoute , Router} from '@angular/router';
import {getErrors} from './helpers/getErrors';


@Component({
  selector: 'app-answers-list',
  templateUrl: './questionsList.component.html',
  styleUrls: ['./questionsList.component.scss'],
})

export class QuestionsListComponent {
  errors = 0;
  questionsData: QuestionData[] = jsTestData;
  correctAnswers: Answers = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  checkTest = async (formTest: NgForm) => {
    const currentAnswers = formTest.value;
    jsTestData.map(data => {
      this.correctAnswers[data._id] = data.answerOptions.correct;
    });

    this.errors = getErrors(currentAnswers, this.correctAnswers);

    await this.router.navigate(['result-window-component'],
      { queryParams: { errors: this.errors }});
    this.router.getCurrentNavigation();
  }

}
