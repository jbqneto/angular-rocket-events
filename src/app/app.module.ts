import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ApolloModule } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideoComponent } from './components/video/video.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LessonEffects } from './storages/effetcs/lesson.effect';
import { eventsReducer } from './storages/reducers/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import * as _ from './external';
import { CustomModule } from './custom.module';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LogoComponent } from './components/logo/logo.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SubscribeComponent, pathMatch: 'full' },
  { path: 'classes', component: ClassroomComponent },
  { path: 'classes/:id/lessons', component: MainComponent },
  { path: 'lessons/:slug', component: MainComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    VideoComponent,
    ClassroomComponent,
    LessonComponent,
    SubscribeComponent,
    MessagesComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({app: eventsReducer}),
    EffectsModule.forRoot([LessonEffects]),
    ApolloModule,
    GraphQLModule,
    HttpClientModule,
    CustomModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
