import {Component, OnInit} from '@angular/core';
import { Todo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    })
  }

}
