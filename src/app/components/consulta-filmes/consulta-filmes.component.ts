import { Component } from '@angular/core';

import { MovieService } from 'src/app/services/movie.services';

@Component({
  selector: 'app-consulta-filmes',
  templateUrl: './consulta-filmes.component.html',
  styleUrls: ['./consulta-filmes.component.scss'],
})
export class ConsultaFilmesComponent {

  defaultImg = '../../../assets/dracula.png';
  searchTerm = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  search() {
    if (this.searchTerm) {
      this.movieService.searchMovies(this.searchTerm).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }

  getMoviePosterUrl(posterPath: string | null) {
    if (!posterPath) {
      return 'defaulImg';
    }

    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }

  clearSearch() {
    this.searchTerm = ''; // Limpa o termo de pesquisa
    this.movies = [];    // Limpa a lista de filmes
  }


  title = 'Buscar Poster de Filme';
  texto =
    'Nesta página você poderá pesquisar o filme por nome, retornar o nome e a imagem do poster do filme. Neste componente estamos consumindo a API do TMDb passando parâmetros nas requisições HTTP - HttpParams. Digite o nome que deseja pesquisar e a solicitação irá retornar o poster e o nome do filme. Enjoy!';
}
