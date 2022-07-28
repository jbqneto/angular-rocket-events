import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.getCurrentNavigation()?.extras.state);
    
    console.log(this.activatedroute.snapshot.params['slug']);
    this.activatedroute.data.subscribe(data => {
      console.log(data);
    })
  }

}
