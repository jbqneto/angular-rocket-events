import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor() { }

  @Input()
  lesson: Lesson | null = null;

  ngOnInit(): void {

  }

  get isLessonAvaiable(): boolean {
    return (!!this.lesson?.availableAt && moment(this.lesson?.availableAt).isBefore(new Date()));
  }

  get lessonLink(): string {
    return '/lessons/' + this.lesson?.id;
  }

  get isActive(): boolean {
    return this.lesson?.isActive ?? false;
  }

  get contentText(): string {
    return (this.isLessonAvaiable) ? 'Conteúdo liberado' : 'Em breve';
  }

  get formatedDate(): string {
    return this.lesson?.getFormatedDate() || '';
  }

}
