import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import ILesson from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private client: Apollo) {

  }

  public getLessons(): Observable<ILesson[]> {
    const query = gql`
    query {
      lessons {
        id
        title,
        availableAt,
        slug,
        lessonType
      }
    }
    `;

    return this.client.query({
    query
    }).pipe(
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
