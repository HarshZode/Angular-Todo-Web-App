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

  
  deletetodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active =! this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  localItem :string;

  constructor() {

    this.localItem = localStorage.getItem("todos")

    if (this.localItem == null){
      this.todos = [
        
      ];
    }
    else(
      this.todos = JSON.parse(this.localItem)
    )


  }

  ngOnInit(): void {
  }


}
