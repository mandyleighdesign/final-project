import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalDirective } from 'node_modules/ngx-bootstrap';
import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
	questionObj = new QuestionClass();
	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('addQuestionModal') addQuestionModal : ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;



  constructor( private toastr: ToastrService) {}

  answerArray = [];

	allQuestions: any = [{
		"id": 1,
		"question": "Which item does NOT belong in the recycling bin?",
		"a": "Plastic Milk Jug",
		"b": "Plastic Soda Bottle",
		"c": "Styrofoam Cup",
		"d": "Laundry Detergent Bottle",
		"answer": "c"
	},
	{
		"id": 2,
		"question": "Which aluminum item is not recyclable?",
		"a": "Soda Cans",
		"b": "Pots and Pans",
		"c": "Aluminum Foil",
		"d": "Aluminum Pie Pans",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "When is America Recycles Day?",
		"a": "December 25",
		"b": "November 15",
		"c": "July 4",
		"d": "February 14",
		"answer": "b"
	}
	];

	/**Method call on submit the test */
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		
		this.submitModal.show();
		// this.answerModal.show();

	}

	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	// addQuestion(){
	// 	this.addQuestionModal.show();
	// }
	// submitAddQuestion(){
	// 	let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
	// 	quesTemp["id"] = this.allQuestions.length+1;
	// 	this.allQuestions.push(quesTemp);
	// 	this.questionForm.reset();
	// 	this.toastr.success("Question Added Successfully!!");
	// 	this.addQuestionModal.hide();

	// }
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}
  ngOnInit() {
  }

}
