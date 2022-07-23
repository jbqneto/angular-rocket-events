import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    VideoComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({app: eventsReducer}),
    EffectsModule.forRoot([LessonEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ApolloModule,
    GraphQLModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
