import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ToDoService{
    todoList= [
        { name:'ABC',
         description:'Description 1', 
         status:false },
         { name:'XYZ',
         description:'Description 2', 
         status:true },
         { name:'PQR',
         description:'Description 3', 
         status:false }];

    addTodo(todo:any){
        this.todoList.push(todo);
    }
}