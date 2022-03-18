import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo-item';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  
  todos: Todo[];

  index :number;

  email:string
  
  ontasksubmit(){
    console.log(this.email)
  }

  deletetodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }

  constructor() {

    this.todos = [
      {
        srno : 1,
        title :"First task",
        desc :"Description",
        active: false
    },
    {
      srno : 2,
      title :"second task",
      desc :"Description",
      active: false
  },
  {
    srno : 3,
    title :"Third task",
    desc :"Description",
    active: false
},
  ]
  }

  ngOnInit(): void {
  }


}
