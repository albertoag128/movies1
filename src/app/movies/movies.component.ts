import { Component } from '@angular/core';
import { Movie } from '../movies';
import { MOVIES } from '../movies_mock';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  selectedMovie?: Movie
  movies = MOVIES

  onSelect(movie: Movie) {
    this.selectedMovie = movie
    alert(movie.Title)
  }
}
