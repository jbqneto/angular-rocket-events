import { createAction, createFeatureSelector, createSelector, props } from "@ngrx/store";
import ILesson from "../../models/lesson.model";

interface Payload<T> {
    payload: T
}

export const GET_LESSONS = '[EVENT-APP] Get Lessons';
export const GET_LESSONS_SUCCESS = '[EVENT-APP] Get Lessons Success';
export const GET_LESSONS_ERROR = '[EVENT-APP] Get Lessons Error';
export const SET_LESSONS = '[EVENT-APP] Set Lessons';

export const getLessons = createAction(GET_LESSONS);
export const getLessonsError = createAction(GET_LESSONS_ERROR, props<{message: string}>());
export const getLessonsSuccess = createAction(GET_LESSONS_SUCCESS, props<{payload: ILesson[]}>());
export const setLessons = createAction(SET_LESSONS, props<Payload<ILesson[]>>())
