import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaceholderComponent} from './components/placeholder/placeholder.component';
import {ContentComponent} from './components/content/content.component';
import {NoteFormComponent} from './components/note-form/note-form.component';


const routes: Routes = [
  {
    path: 'add',
    component: NoteFormComponent
  },
  {
    path: ':id',
    component: ContentComponent
  },
  {
    path: '',
    component: PlaceholderComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
