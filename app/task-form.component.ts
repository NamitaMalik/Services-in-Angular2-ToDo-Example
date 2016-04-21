/**
 * Created by namita on 4/21/16.
 */

import {Component,Output,EventEmitter} from 'angular2/core';
import {ToDo} from './toDo';

@Component({
    selector: 'task-form',
    template: `
    <h1>{{title}}</h1>
    <h2>Enter To Do Items Below:</h2>
    <input (keyup.enter)="onKey(todo)" #todo>
    `
})

export class TaskFormComponent {
    @Output() newToDo = new EventEmitter<ToDo>();
    onKey(toDo) {
        this.newToDo.next({text:toDo.value});
        toDo.value = '';
    }
}