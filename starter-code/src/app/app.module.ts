import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { MoviesService } from './services/movies.service';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { MovieComponent } from './pages/movie/movie.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:theMovieId', component: MovieComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
