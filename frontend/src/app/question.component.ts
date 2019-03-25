import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question = {};

    constructor(private apiService: ApiService){}

    post(question) {
        this.apiService.postQuestion(question);
    }
}