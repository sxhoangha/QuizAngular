import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

     
    constructor(private api: ApiService) {}

    quiz = {}

    ngOnInit(){
        this.api.quizSelected.subscribe(quiz => this.quiz = quiz) 
        //subscribe to the observable so that everytime a user click
        //on a quiz on the quiz list, the selected quiz is assigned to be the model of the component.
        
    }
    
}