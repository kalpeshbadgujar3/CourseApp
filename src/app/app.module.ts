import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoComponent } from './toDo/toDo.component';
import { AddToDoComponent } from './toDo/add/add.component';
import { ToDoListComponent } from './toDo/list/list.component';
import { ModalModule } from "ngx-bootstrap";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    ToDoComponent,
    AddToDoComponent,
    ToDoListComponent,
     
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
