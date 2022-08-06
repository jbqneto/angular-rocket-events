import { createReducer, on } from "@ngrx/store"
import { ILesson } from "src/app/models/lesson.model"
import { getLessons, getLessonsError, getLessonsSuccess, getUrl, setLessons, setUrl } from "./app.actions"

export interface UrlRoute {
    url: string,
    params: any,
}

export interface AppState {
    lessons: ILesson[],
    errors: string[],
    loading: boolean,
    route: UrlRoute
}

export const initialState: AppState = {
    lessons: [],
    errors: [],
    loading: false,
    route: {
        url: '',
        params:{}
    }
}

export const eventsReducer = createReducer(
    initialState,
    on(getLessons, state => {
        return {...state, errors: [], loading: true}
    }),
    on(getLessonsSuccess, (state, action) => {
        return {...state, loading: false, lessons: action.payload};
    }),
    on(setLessons, (state, action) => ({...state, lessons: action.payload})),
    on(getLessonsError, (state, action) => ({...state, loading: false, errors: [action.message], lessons: []})),
    on(getUrl, (state) => ({...state})),
    on(setUrl, (state, {url, params}) => (
        {...state, route: {url: url, params}}
    ))
);