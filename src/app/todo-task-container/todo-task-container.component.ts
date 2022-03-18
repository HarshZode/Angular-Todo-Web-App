
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../Todo-item';



@Component({
  selector: 'app-todo-task-container',
  templateUrl: './todo-task-container.component.html',
  styleUrls: ['./todo-task-container.component.css']
})



export class TodoTaskContainerComponent implements OnInit {

  @Input() todo: Todo[];
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();

  task: string;

  ontasksubmit(){
    console.log(this.task)
  }
  
  OnDelete(todo:Todo){
    this.todoDelete.emit(todo); 
    console.log("Delete button was clicked");
  }

  constructor() { 


  }

  ngOnInit(): void {
  }

}