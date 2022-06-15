import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[]=[] ;

  constructor() {}

  getNotes(){ return this.notes}

  getNoteById(Id: any){
  //returns true when the n id is equal to the id that is passed in
    return this.notes.find((n: { id: any; }) =>  n.id === Id)
  }

  addNote(note:Note){this.notes.push(note);}

  updateNote(id: string, updatedFields: Partial<Note>){
    const note = this.getNoteById(id);
    Object.assign(note, updatedFields);
  }

  deleteNote(id: string){
    const noteIndex = this.notes.findIndex((n: { id: string; }) => n.id === id);
    //if the note is not found, findIndex generates a value of -1. input a check and 
    //return statement to ensure note is accidentally deleted when the note is not found.
    if(noteIndex === -1){
      return;
    }
    this.notes.splice(noteIndex, 1);
  }
}
