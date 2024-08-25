import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoList } from '../../models/todo.models';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="container">
    @for (item of todoList.Items; track $index) {
      <div class="row">
        <div class="col">Title: {{item.Title}}</div>
        <div class="col">Content: {{item.Content}}</div>
        <div class="col">Created Date: {{item.CreatedDate}}</div>
    </div>
    }
    <div class="row">
      <div class="col"><button (click)="getOctocat()">Get Octocat</button></div>
    </div>
  <div>`,
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  todoList: TodoList = new TodoList();

  constructor(private http: HttpClient) {
    this.todoList.Items = [{
      Title: 'task 1',
      Content: 'content 1',
      CreatedDate: new Date()
    },
    {
      Title: 'task 2',
      Content: 'content 2',
      CreatedDate: new Date()
    }]
  }

  async getOctocat() {
    this.http.get(`https://github.com/octocat`).subscribe(x => console.debug(x));
  }
}

