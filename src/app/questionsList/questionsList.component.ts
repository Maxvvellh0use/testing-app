import { Component, OnInit } from '@angular/core';
import {Answers , QuestionData} from '../types';
import {jsTestData} from '../data/jsTestData';
import {NgForm} from '@angular/forms';
import {ActivatedRoute , Router} from '@angular/router';
import {getErrors} from './helpers/getErrors';
import {getRandomSort} from './helpers/getRandomSort';


@Component({
  selector: 'app-answers-list',
  templateUrl: './questionsList.component.html',
  styleUrls: ['./questionsList.component.scss'],
})

export class QuestionsListComponent implements OnInit {
  errors = 0;
  questionsData: QuestionData[] = jsTestData.slice();
  correctAnswers: Answers = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit(): void {
        this.questionsData.forEach(data => {
          getRandomSort(data.answerOptions.all);
        });
    }

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
