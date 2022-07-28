import { createReducer, on } from "@ngrx/store"
import ILesson from "src/app/models/lesson.model"
import { getLessons, getLessonsError, getLessonsSuccess, setLessons } from "./app.actions"

export interface UrlRoute {
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
        params:{}
    }
}

export const eventsReducer = createReducer(
    initialState,
    on(getLessons, state => {
        return {...state, errors: [], loading: true}
    }),
    on(getLessonsSuccess, (state, action) => {
        console.log(state, action);
        return {...state, loading: false, lessons: action.payload};
    }),
    on(setLessons, (state, action) => ({...state, lessons: action.payload})),
    on(getLessonsError, (state, action) => ({...state, loading: false, errors: [action.message], lessons: []})),
);