import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {ActivatedRoute} from '@angular/router';
import {NoteT} from '../../models/note.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  noteId: number;

  note: NoteT | null = null;

  constructor(
    private readonly noteService: NoteService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
      this.noteId = Number(params.id);
      this.note = this.noteService.getNoteById(this.noteId) ?? null;
    });
  }

}
