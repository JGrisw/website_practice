import { NoteService } from './../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm){
    if(form.invalid) return alert("form is invalid");
    const note = new Note(form.value.title, form.value.content);
    console.log(note);
    this.noteService.addNote(note);
    this.router.navigateByUrl('/notes');
  }

}
