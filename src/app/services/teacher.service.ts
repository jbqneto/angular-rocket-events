import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { CreateSubscriberGQL, CreateTeacherGQL, GetTeachersDocument, GetTeachersGQL } from '../graphql/generated';
import ITeacher from '../models/teacher.model';

interface IResponse {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private client: Apollo, private getTeachersGQL: GetTeachersGQL, private postTeacherGQL: CreateTeacherGQL) {

  }

  public getTeachers(): Observable<ITeacher[]> {
    return this.getTeachersGQL.watch().valueChanges.pipe(
        map(data => data.data as any),
        tap((data) => console.log(data)),
        map((data) => data.teachers as ITeacher[])
    )
  }

  public createTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.postTeacherGQL.mutate({
      name: teacher.name,
      email: teacher.email,
      bio: teacher.bio,
      avatarURL: teacher.avatar
    }).pipe(
      tap((data) => console.log(data)),
      map(({data}) => ((data as any).createSubscriber)),
      map((response: IResponse) => (
        {
          ...teacher,
          id: response.id
        }
      )
    ))
      
  }
  
}
