import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { LessonService } from "src/app/services/lessons.service";
import { getLessons, getLessonsError, getLessonsSuccess, setLessons } from "../reducers/app.actions";
import { AppState } from "../reducers/app.reducer";

@Injectable()
export class LessonEffects {

    loadLessons$ = createEffect(() => this.actions$.pipe(
        ofType(getLessons),
        exhaustMap(() => this.lessonService.getLessons()
            .pipe(
                tap(data => console.log('Effect data: ',data)),
                map(lessons => getLessonsSuccess({ payload: lessons})),
                catchError((err) => of(getLessonsError({message: err.nessage}))
            )),
        )
    ));

    constructor(
        private actions$: Actions,
        private lessonService: LessonService) {}
}