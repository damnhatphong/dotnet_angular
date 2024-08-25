import { Component } from '@angular/core';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}
