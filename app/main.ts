/**
 * Created by namita on 4/21/16.
 */

import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ToDoService} from "./todo-service";

bootstrap(AppComponent,[ToDoService]);
