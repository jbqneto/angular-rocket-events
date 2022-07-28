import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import ITeacher from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

type TeacherSummary = Pick<ITeacher, 'id' | 'name' | 'avatar'>;

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  public teachers: TeacherSummary[] = [];
  constructor(private teacherSevice: TeacherService) {}

  ngOnInit(): void {
    this.teacherSevice.getTeachers()
      .pipe(
        tap(data => console.log(data))
      )
      .subscribe((teachers) => {
        this.teachers = teachers.map((teacher) => ({
          id: teacher.id,
          name: teacher.name,
          avatar: teacher.avatar
        }
        ))
      });
  }

}
