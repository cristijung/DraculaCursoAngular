import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.services';

@Component({
  selector: 'app-consulta-filmes',
  templateUrl: './consulta-filmes.component.html',
  styleUrls: ['./consulta-filmes.component.scss']
})
export class ConsultaFilmesComponent {
  searchTerm = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  search() {
    if (this.searchTerm) {
      this.movieService.searchMovies(this.searchTerm)
        .subscribe((data: any) => {
          this.movies = data.results;
        });
    }
  }

  getMoviePosterUrl(posterPath: string | null) {
    if (!posterPath) {
      return 'URL_DA_IMAGEM_PADRÃO'; // Substitua pela URL de uma imagem padrão
    }

    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }
}
