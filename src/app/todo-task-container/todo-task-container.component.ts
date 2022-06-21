
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../Todo-item';



@Component({
  selector: 'app-todo-task-container',
  templateUrl: './todo-task-container.component.html',
  styleUrls: ['./todo-task-container.component.css']
})



export class TodoTaskContainerComponent implements OnInit {

  @Input() todo: Todo[];
  @Input() x:number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone : EventEmitter<Todo> = new EventEmitter();

  task: string;
  temp:Todo;
  // selector: '#up'
  // selector: 

  
  on_up(todo:Todo,numb:number){
   
    console.log(this.todo[numb]);
    this.temp = this.todo[numb]
    this.todo[numb]=this.todo[numb-1]
    this.todo[numb-1]=this.temp
    localStorage.setItem("todos", JSON.stringify(this.todo))
  }

  on_down(todo:Todo,numb:number){
   
    console.log(this.todo[numb]);
    this.temp = this.todo[numb]
    this.todo[numb]=this.todo[numb+1]
    this.todo[numb+1]=this.temp
    localStorage.setItem("todos", JSON.stringify(this.todo))
  }

  onDone(todo:Todo){

    console.log(todo);
    this.todoDone.emit(todo);
    console.log("X ki value");
    console.log(this.x);
    
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
