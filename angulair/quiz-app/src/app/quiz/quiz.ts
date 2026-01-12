import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  imports: [FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})

export class Quiz {
 router = inject(Router);

   questions=[
    {question:'Capital of France?',options:["Paris","London","New York"],answer:'Paris'},
    {question:'Capital of Germany?',options:["Berlin","London","New York"],answer:'Berlin'},
    {question:'Capital of Italy?',options:["Rome","London","New York"],answer:'Rome'},
    {question:'Capital of Spain?',options:["Madrid","London","New York"],answer:'Madrid'},
    {question:'Capital of Portugal?',options:["Lisbon","London","New York"],answer:'Lisbon'},
    {question:'Capital of Norway?',options:["Oslo","London","New York"],answer:'Oslo'},
    {question:'Capital of Denmark?',options:["Copenhagen","London","New York"],answer:'Copenhagen'},
    {question:'Capital of Sweden?',options:["Stockholm","London","New York"],answer:'Stockholm'},
  ]
  c=0;
  score=0;
  feedbackMessage: string = '';
  isCorrect: boolean = false;
  showFeedback: boolean = false;
  selectoption(option:string){
    if(option==this.questions[this.c].answer){
      this.feedbackMessage = 'Correct! Well done!';
      this.isCorrect = true;
      this.score++;
    } else {
      this.feedbackMessage = 'Incorrect. The correct answer is: ' + this.questions[this.c].answer;
      this.isCorrect = false;
    }
    this.showFeedback = true;
    
    this.c++;
    if(this.c==this.questions.length){
      this.router.navigate(['/result'],{state:{score:this.score}});
    }
  }

}
