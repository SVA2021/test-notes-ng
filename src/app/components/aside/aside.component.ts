import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Router} from '@angular/router';
import {NotesTitlesT} from '../../models/note.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  shortNotes: NotesTitlesT[] = [];

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.noteService.notes$
      .subscribe(notes => {
      this.shortNotes = this.noteService.getNotesTitle();
    });
  }


  addNote(): void {
    this.router.navigate(['add']).then();
  }

  goToNote(id: number): void {
    this.router.navigate(['/', id]).then();
  }

}
