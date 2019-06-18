// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quiz',
//   templateUrl: './quiz.component.html',
//   styleUrls: ['./quiz.component.css']
// })
// export class QuizComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import {QUIZ_DATA} from '../data/quiz-data';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger('pageState', [
      state('inactive', style({
        boxShadow: '0 1px 3px #aaa',
        border: '1px solid grey',
        transform: 'scale(1)'
      })),
      state('active',   style({
        boxShadow: '0 2px 5px #aaa',
        border: '1px solid green',
        transform: 'scale(1.4)',
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class QuizComponent {
  questions = QUIZ_DATA;
  summary = {};
  selections = {};
  showSummary = false;
  option = false;
  activeSlideIndex = 0;

  constructor() {
  }

  onSelected(questionIdx, choiceIdx) {
    this.summary[questionIdx] =
      this.questions[questionIdx].choices[choiceIdx].summary;

    this.selections[questionIdx] = choiceIdx;

    if (Object.keys(this.selections).length === this.questions.length) {
      this.activeSlideIndex = 0;
      this.showSummary = true;
    } else {
      // FOR AUTO change question
      if (this.activeSlideIndex === this.questions.length - 1 && this.option) {
        this.activeSlideIndex = 0;
      } else if (this.option) {
        this.activeSlideIndex += 0;
      }
    }
  }

  changeActiveSlide(index) {
    this.activeSlideIndex = index;
  }

  resetQuiz() {
    this.showSummary = false;
    this.selections = {};
    this.summary = {};
  }

  getSummary() {
    const limit = Object.keys(this.summary).length;
    let summary = '';

    for (let index = 0; index < limit; index++) {
      summary += `${this.summary[index]}`;
    }

    return summary;
  }
}
