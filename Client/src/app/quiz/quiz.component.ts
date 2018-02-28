import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 
  score = '7';
  toggleScore(){
    $('.title').slideToggle(); 
    
  }
  
  constructor() { }

  ngOnInit() {
  }


}
