import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';

interface ISubscriber {
  name: string,
  email: string,
  id: string
}

interface IResponse {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private client: Apollo) {

  }

  public createSubscriber(name: string, email: string): Observable<ISubscriber> {
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
        name,
        email
      }
    }).pipe(
      tap((data) => console.log(data)),
      map(({data}) => ((data as any).createSubscriber)),
      map((response: IResponse) => (
        {
          name,
          email,
          id: response.id
        }
      )
    ))
      
  }
  
}
