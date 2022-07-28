import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import ITeacher from '../models/teacher.model';

interface IResponse {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private client: Apollo) {

  }

  public getTeachers(): Observable<ITeacher[]> {
    const query = gql`
    query {
        teachers {
            id
            name,
            bio,
            avatarURL
        }
    }
    `;

    return this.client.query({
        query
    }).pipe(
        map(data => data.data as any),
        tap((data) => console.log(data)),
        map((data) => data.teachers as ITeacher[])
    )
  }

  public createTeacher(teacher: ITeacher): Observable<ITeacher> {
    const mutation = gql`
      mutation CreateSubscriber ($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
          id
        }
      }
    `;

    return this.client.mutate({
      mutation,
      variables: {
        name: teacher.name,
        bio: teacher.bio,
        avatar: teacher.avatar
      }
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
