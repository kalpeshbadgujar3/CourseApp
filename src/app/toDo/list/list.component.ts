import { Component } from '@angular/core';

@Component({
    selector: 'app-toDoList',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})
export class ToDoListComponent{
    serverList= [
        { name:'ABC',
         description:'Description 1', 
         status:false },
         { name:'XYZ',
         description:'Description 2', 
         status:true },
         { name:'PQR',
         description:'Description 3', 
         status:false }];
}