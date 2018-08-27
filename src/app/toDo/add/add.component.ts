import { Component, ViewChild,OnInit } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
    selector: 'app-addToDo',
    templateUrl:'./add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddToDoComponent implements OnInit{
    @ViewChild('modaltest') public modal: ModalDirective;
    isModalShown = false;
    createToDoForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createToDoForm = this.formBuilder.group({
            name: ['', Validators.required,
                Validators.maxLength(30),
                Validators.pattern('^(?![0-9]*$)[a-zA-Z0-9]+$')],
            description: ['', Validators.maxLength(500)],
            status:['',Validators.required]
        })
    }
    
    
    modalHandler() {
        console.log("modal handler executed");
        this
    }

    showModal(toDo: any): void{
        console.log("show modal executed");
        this.isModalShown =  true;
    }
}