/**
 * Created by namita on 4/21/16.
 */
import {Component} from 'angular2/core';
import {TaskListComponent} from "./task-list.component";
import {TaskFormComponent} from "./task-form.component";
import {ToDo} from "./todo";
import {ToDoService} from "./todo-service";

@Component({
    selector: 'my-app',
    template: `
    <task-form (newToDo)="addToDo($event)"></task-form>
    <task-list></task-list>
    `,
    providers: [ToDoService],
    directives: [TaskListComponent, TaskFormComponent]
})

export class AppComponent {
    constructor(public todoService:ToDoService) {
    }

    addToDo(toDo:ToDo) {
        this.todoService.toDoList.push(toDo);
    }
}