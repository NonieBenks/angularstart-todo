import { Component, inject } from '@angular/core';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoFormComponent } from './ui/todo-form.component';
import { TodoListComponent } from './ui/todo-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `<h2>Todo</h2>
    <app-todo-form
      (todoSubmitted)="this.todoService.addTodo($event)"
    ></app-todo-form>
    <app-todo-list [todos]="todoService.todos()"></app-todo-list>`,
  imports: [TodoFormComponent, TodoListComponent],
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
