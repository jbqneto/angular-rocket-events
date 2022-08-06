import { createAction, createFeatureSelector, createSelector, props } from "@ngrx/store";
import { ILesson } from "../../models/lesson.model";

interface Payload<T> {
    payload: T
}

interface UrlData {
    url: string,
    params: {
        [key: string]: string
    }
}

const createActionName = (complement: string): string => {
    return '[EVENT-APP]' + complement;
};

export const GET_LESSONS = createActionName('Get Lessons');
export const GET_LESSONS_SUCCESS = createActionName('Get Lessons Success');
export const GET_LESSONS_ERROR = createActionName('Get Lessons Error');
export const SET_LESSONS = createActionName('Set Lessons');

export const getLessons = createAction(GET_LESSONS);
export const getLessonsError = createAction(GET_LESSONS_ERROR, props<{message: string}>());
export const getLessonsSuccess = createAction(GET_LESSONS_SUCCESS, props<{payload: ILesson[]}>());
export const setLessons = createAction(SET_LESSONS, props<Payload<ILesson[]>>());

export const setUrl = createAction(createActionName('Get URL'), props<UrlData>());
export const getUrl = createAction(createActionName('Get URL'));