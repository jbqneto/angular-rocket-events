import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lesson } from 'src/app/models/lesson.model';
import { getLessons, getUrl } from 'src/app/storages/reducers/app.actions';
import { AppState } from 'src/app/storages/reducers/app.reducer';
import { selectAllLessons, selectUrl } from 'src/app/storages/reducers/app.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  lessons: Lesson[] = [];
  currentLessonId: string | null = null;

  constructor(private store: Store<{ app: AppState }>) { }

  ngOnInit(): void {
    this.store.select(selectUrl).subscribe((url) => {
      console.log('url: ', url);

      if (url.params.slug) {
        this.currentLessonId = url.params.slug;
      }

      this.store.dispatch(getLessons());
    });

    this.store.select(selectAllLessons)
      .subscribe((lessons) => {
        this.lessons = lessons.map((ilesson) => {
          const lesson: Lesson = Lesson.clone(ilesson);
          lesson.isActive = ilesson.id === this.currentLessonId;
          
          return lesson;
        });
      });
  }

}
