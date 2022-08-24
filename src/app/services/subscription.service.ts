import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { CreateSubscriberDocument, CreateSubscriberGQL, CreateSubscriberMutation } from '../graphql/generated';

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

  constructor(private postSubscriberGQL: CreateSubscriberGQL) {

  }

  public createSubscriber(name: string, email: string): Observable<ISubscriber> {
    return this.postSubscriberGQL.mutate({
        name,
        email
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
    ));
  }
}
