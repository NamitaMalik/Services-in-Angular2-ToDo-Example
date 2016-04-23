/**
 * Created by namita on 4/21/16.
 */

import {Component,Output,EventEmitter} from 'angular2/core';
import {ToDo} from './toDo';
import {HttpTestService} from "./http-service.ts"

@Component({
    selector: 'task-form',
    template: `
    <h1>{{title}}</h1>
    <h2>Enter To Do Items Below:</h2>
    <input (keyup.enter)="onKey(todo)" #todo>
    <button (click)="getTime()">Get Current Time</button>
    <p>{{timeData}}</p>
    `,
    providers: [HttpTestService]
})

export class TaskFormComponent {
    title : string = "To Do List";
    timeData : string = 'asdasdf';
    @Output() newToDo = new EventEmitter<ToDo>();

    onKey(toDo) {
        this.newToDo.next({text: toDo.value});
        toDo.value = '';
    }

    constructor(private _httpTestService:HttpTestService) {
    }
    getTime() {
        var _this = this;
        this._httpTestService.getCurrentTime()
            .subscribe(
                data => _this.timeData = data.time
            ,
            (error) => {
                //this.error = alert(error)
            }
        )
    }
}