import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NoteService} from '../../services/note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  readonly noteForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });
  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) { }

  addNote(): void {
    const body = {
      id: this.noteService.getLastId() + 1,
      title: this.noteForm.value.title ?? '',
      content: this.noteForm.value.content ?? ''
    };
    this.noteService.addNote(body);
    this.router.navigate(['/', body.id]).then();
  }

}
