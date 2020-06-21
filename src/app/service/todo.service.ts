import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'learn react',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '222',
        title: 'learn angular',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '333',
        title: 'learn vue',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.forEach((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexofTodo, 1);
  }
}
