import { Todo } from './../Todo-item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

 
  task :any;
  
  ontasksubmit(){
    console.log(this.task)
  }

  title:string;
  desc:string;
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
  
  onSubmit(){
    const todo ={
      srno:1,
      title:this.title,
      desc:this.desc,
      active: false
    }
    this.todoAdd.emit(todo);
  }
  
  constructor() { }

  ngOnInit(): void {
  }


}
