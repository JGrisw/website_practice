import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Todo } from './../shared/todo.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output()
  editClick: EventEmitter<void> = new EventEmitter();

  @Output()
  deleteClick:EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(){
   this.editClick.emit();
  }

  onDeleteClick(){
    this.deleteClick.emit();
  }

}
