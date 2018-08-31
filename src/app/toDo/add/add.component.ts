import { Component, ViewChild,OnInit, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ToDoService } from 'src/app/services/toDo.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-addToDo',
    templateUrl:'./add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddToDoComponent implements OnInit{
    createToDoForm: FormGroup;
    modalRef: BsModalRef;
    // @ViewChild('addTodo') public modal: ElementRef;
    isModalShown = false;

    constructor( private formBuilder: FormBuilder,
                private todoService: ToDoService,
                private modalService: BsModalService) {
    }

    ngOnInit() {
        this.createToDoForm = this.formBuilder.group({
            name: ['',[Validators.required,
                Validators.pattern('^(?![0-9]*$)[a-zA-Z0-9]+$')] ],
            description: ['', Validators.maxLength(500)],
            status:['',Validators.required]
        })

    }

    showAddProjectModal(template: TemplateRef<any>){
        this.modalRef = this.modalService.show(template);
    }
    
    onHidden() {
        this.isModalShown = false;
    }

    modalHandler() {
        console.log("modal handler executed");
    }

    /**
     * Create todo
     */
    onSubmit(){
        const todoData = {
            'name': this.createToDoForm.value.name,
            'description': this.createToDoForm.value.description,
            'status': this.createToDoForm.value.status
        }
        
        this.todoService.addTodo(todoData);
    }
}