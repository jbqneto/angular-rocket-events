import { TestBed } from '@angular/core/testing';

import { LessonService } from './lessons.service';

describe('LessonService', () => {
  let service: LessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
