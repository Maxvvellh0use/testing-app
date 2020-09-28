import {Component , Input, OnInit} from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';

import { jsTestData } from '../data/jsTestData';
import {QuestionData} from '../types';

@Component({
  selector: 'app-result-window',
  templateUrl: 'resultWindow.component.html',
  styleUrls: ['resultWindow.component.scss']
})

export class ResultWindowComponent implements OnInit {
  errors: number;
  allAnswers: QuestionData[] = jsTestData;
  successAnswers: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}


  tryAgain = async () => {
    await this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.errors = params.errors;
      this.successAnswers = this.allAnswers.length - this.errors;
    });
  }
}
