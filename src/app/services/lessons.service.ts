import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { GetLessonsDocument, GetLessonsGQL } from '../graphql/generated';
import { ILesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private getLessonsGQL: GetLessonsGQL) {

  }

  public getLessons(): Observable<ILesson[]> {
    return this.getLessonsGQL.watch().valueChanges
    .pipe(
      map(data => data.data as any),
      map((data) => {
        return data.lessons.map((lesson: any) => <ILesson> {
          id: lesson.id,
          slug: lesson.slug,
          availableAt: lesson.availableAt,
          title: lesson.title,
          type: lesson.lessonType,
        });
      }
      )
    )
  }
}
