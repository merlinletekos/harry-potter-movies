import { Routes } from '@angular/router';
import {MovieListComponent} from "./movies/movie-list/movie-list.component";

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  }
];
