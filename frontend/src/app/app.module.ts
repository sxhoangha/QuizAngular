import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdButtonModule, MdInputModule, MdCardModule, MdListModule } from '@angular/material'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import { QuestionsComponent } from './questions.component'

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MdButtonModule, 
    MdInputModule ,
    MdCardModule,
    MdListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
