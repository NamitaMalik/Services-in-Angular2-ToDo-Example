/**
 * Created by namita on 4/21/16.
 */

import {Component,Input} from 'angular2/core';
import {ToDo} from './toDo';
import {ToDoService} from './todo-service';

@Component({
    selector: 'task-list',
    template: `
    <div>
        <p>Your To Do Items:</p>
    </div>
    <div style="padding: 10px 0 0 0">
    <table width="300" border="1" cellpadding="5" style="text-align: center">
        <tr>
            <th>S.No.</th>
            <th>To Do Item</th>
        </tr>
        <tr *ngFor="#toDo of toDoList, #i=index, #last=last, #odd=odd, #even=even"  [ngClass]="{'odd-color':odd, 'even-color':even, 'last-color' : last }">
            <td>{{i+1}}</td>
            <td>{{toDo.text}}</td>
        </tr>
    </table>
    </div>
    `
})

export class TaskListComponent {
    title = 'My To Do List';
    constructor(public todoService:ToDoService){
    }
    toDoList = this.todoService.toDoList;
}