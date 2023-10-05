import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private apiKey = '3dacd77a8ba219ced04ee470310b7151'; //minha chave -- é preciso gerar

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string) {
    const params = new HttpParams().set('api_key', this.apiKey).set('query', searchTerm);

    return this.http.get('https://api.themoviedb.org/3/search/movie', { params });
  }

  getMovieImages(movieId: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
      params: new HttpParams().set('api_key', this.apiKey)
    });
  }
}
