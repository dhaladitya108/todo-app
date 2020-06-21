import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../../model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    this.todoservice.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoservice.deleteTodo(todo);
  }
}
