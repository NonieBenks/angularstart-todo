import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo';
import { TodoFormComponent } from './ui/todo-form.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `<h2>Todo</h2>
    <app-todo-form (todoSubmitted)="createTodo($event)"></app-todo-form>`,
  imports: [TodoFormComponent],
})
export default class HomeComponent {
  createTodo(todo: Todo) {
    console.log(todo);
  }
}
