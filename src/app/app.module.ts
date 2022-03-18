import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoTaskContainerComponent } from './todo-task-container/todo-task-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListContainerComponent,
    AddTodoFormComponent,
    TodoTaskContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
