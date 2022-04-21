import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'bookmarks', component: BookmarksComponent, data: { tabNumber: 1 } },
  { path: 'todos', component: TodosComponent, data: { tabNumber: 2 }},
  { path: 'notes', component: NotesComponent, data: { tabNumber: 3 }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
