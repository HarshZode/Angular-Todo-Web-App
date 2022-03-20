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
  
  ifBlank(){
    if(this.title == null){
      alert("Please enter task name")
    }
  }

  onSubmit(){
    if(this.title == undefined || this.title == '' || this.title == null){
      alert("Please enter task name")
    }
    else{
      
      const todo ={
        srno:1,
        title:this.title,
        desc:this.desc,
        active: false
      }
      console.log(todo.title)
      this.todoAdd.emit(todo);
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }


}
