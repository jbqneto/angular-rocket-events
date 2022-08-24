import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter } from 'rxjs';
import { setUrl } from './storages/reducers/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'events-app';

  constructor(private store: Store, private router: Router, private activatedroute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter((event: any) => event.type === 1)
    )
    .subscribe((routerEvent: any) => {
      this.store.dispatch(setUrl({url: routerEvent.url, params: {}}))
    });
  }

}
