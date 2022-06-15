import { NoteService } from './../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  showValidationErrors!: boolean;
  note: Note | any;

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=> {
      const idParam = paramMap.get('id');
      this.note = this.noteService.getNoteById(idParam);
    })
  }

  onFormSubmit(form: NgForm){
    this.noteService.updateNote(this.note.id, form.value);
    this.router.navigateByUrl('notes');
  }

  deleteNote(){
    this.noteService.deleteNote(this.note.id);
      this.router.navigateByUrl('/notes');
  }
}
