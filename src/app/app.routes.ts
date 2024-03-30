import { Routes } from '@angular/router';
import {MovieListComponent} from "./movies/movie-list/movie-list.component";
import {MovieComponent} from "./movies/movie/movie.component";

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie/:movieId',
    component: MovieComponent
  }
];
