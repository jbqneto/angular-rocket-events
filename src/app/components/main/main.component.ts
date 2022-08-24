import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { setUrl } from 'src/app/storages/reducers/app.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit { 
  constructor(private store: Store,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    combineLatest([this.activatedroute.url, this.activatedroute.params])
      .subscribe(([urlSegments, params]) => {
        const url = urlSegments.map((segment) => segment.path).join('/');
        
        this.store.dispatch(setUrl({url, params: params}));
      })

  }

}
