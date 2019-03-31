import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    question = {}
    questions
    
    constructor(private api: ApiService) {}

    ngOnInit() {
        console.log("once")
        this.api.getQuestions().subscribe(res => {
            this.questions = res
        })
    }

    
}