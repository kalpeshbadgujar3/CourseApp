import { Component } from '@angular/core';
import { ToDoService } from 'src/app/services/toDo.service';
 
@Component({
    selector: 'app-toDoList',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})
export class ToDoListComponent{
    constructor(public todoService: ToDoService){

    }
}