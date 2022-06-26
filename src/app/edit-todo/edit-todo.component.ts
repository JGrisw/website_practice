import { Todo } from './../shared/todo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  showValidationErrors!: boolean;
  todo: Todo | any;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=> {
      const idParam = paramMap.get('id');
      this.todo = this.todoService.getTodo(idParam);
    })
  }

  onFormSubmit(form: NgForm){
    this.todoService.updateTodo(this.todo.id, form.value);
    this.router.navigateByUrl('todos');
  }

  



}
