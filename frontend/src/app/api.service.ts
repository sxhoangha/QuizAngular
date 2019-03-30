import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>(); // create an Subject object 
    questionSelected = this.selectedQuestion.asObservable() //create Observable

    constructor(private http: HttpClient) {}

    getQuestions(){
        return this.http.get('http://localhost:43257/api/questions')
    }

    postQuestion(question){
        this.http.post('http://localhost:43257/api/questions', question).subscribe(res => {
            console.log(res)
        })
    }

    putQuestion(question){
        this.http.put(`http://localhost:43257/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question){ // whoever subscribe to questionSelected will be notified when a question is selected
        this.selectedQuestion.next(question)
    }

}