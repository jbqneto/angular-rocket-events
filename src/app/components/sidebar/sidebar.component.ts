import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ILesson from 'src/app/models/lesson.model';
import { getLessons } from 'src/app/storages/reducers/app.actions';
import { AppState } from 'src/app/storages/reducers/app.reducer';
import { selectAllLessons } from 'src/app/storages/reducers/app.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  lessons: ILesson[] = [];

  constructor(private store: Store<{ app: AppState }>) { }

  ngOnInit(): void {
    this.store.select(selectAllLessons)
    .subscribe((lessons) => { console.log(lessons); this.lessons = lessons});
    
    this.store.dispatch(getLessons());
  }

}
