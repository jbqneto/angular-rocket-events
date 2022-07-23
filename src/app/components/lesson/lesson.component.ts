import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import ILesson from 'src/app/models/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor() { }

  @Input()
  lesson: ILesson | null = null;

  ngOnInit(): void {

  }

  get isLessonAvaiable(): boolean {
    return (!!this.lesson?.availableAt && moment(this.lesson?.availableAt).isBefore(new Date()));
  }

}
