export class TodoItem {
    Title!: string;
    Content?: string;
    CreatedDate: Date = new Date();
}

export class TodoList {
    Items: TodoItem[] = [];
}