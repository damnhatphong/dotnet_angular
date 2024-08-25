import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTodoItem',
  standalone: true,
})
export class TodoItemPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
