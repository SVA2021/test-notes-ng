import { Injectable } from '@angular/core';
import {NotesTitlesT, NoteT} from '../models/note.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: NoteT[] = [
    { id: 1, title: 'Note 1', content: 'Lorem 1 ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { id: 2, title: 'Note 2', content: 'Lorem 2 ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { id: 3, title: 'Note 3', content: 'Lorem 3 ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { id: 4, title: 'Note 4', content: 'Lorem 4 ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { id: 5, title: 'Note 5', content: 'Lorem 5 ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
  ];

  private lastId = 5;

  public notes$ = new BehaviorSubject(this.notes);

  getNotes(): NoteT[] {
    return this.notes;
  }

  getLastId(): number {
    return this.lastId;
  }

  getNotesTitle(): NotesTitlesT[] {
    return this.notes.map(note => {
      return {
        id: note.id,
        title: note.title
      };
    });
  }

  getNoteById(id: number): NoteT {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: NoteT): void {
    this.notes.push(note);
    this.lastId++;
    this.notes$.next(this.notes);
  }
}
