import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "./todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl: string;

  constructor(private http: HttpClient) {
    this.todosUrl = 'http://localhost:8080/api/todo'
  }

  public findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  public save(todo: Todo) {
    return this.http.post(this.todosUrl, todo);
  }
}
