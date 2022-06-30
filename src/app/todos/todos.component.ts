import { NotificationService } from './../shared/notification.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(300, style({
          opacity:0,
          height:0,
          marginBottom:0
        }))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  constructor(
    private todoService: TodoService, 
    private router: Router, 
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleCompleted(todo: Todo){
    this.todoService.updateTodo(todo.id, {completed: !todo.completed})
  }

  onEditClick(todo: Todo){
    this.router.navigate(['/todos', todo.id]);
  }

  onDeleteClick(todo: Todo){
    this.todoService.deleteTodo(todo.id);
    this.notificationService.show('Deleted Congrats!')
  }

}
