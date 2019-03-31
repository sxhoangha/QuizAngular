import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question = {}
    quizId
    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.quizId = this.route.snapshot.paramMap.get('quizId') //get the quizId for the route
        
        this.api.questionSelected.subscribe(question => this.question = question) //subscribe to observable, set 
                                                                                //question model to the selected one.
    }

    post(question) {
        question.quizId = this.quizId //set the quizId of the question
        this.api.postQuestion(question)
    }
}