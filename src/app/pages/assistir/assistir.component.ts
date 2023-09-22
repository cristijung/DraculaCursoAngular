import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assistir',
  templateUrl: './assistir.component.html',
  styleUrls: ['./assistir.component.scss']
})
export class AssistirComponent implements OnInit {
  searchForm!: FormGroup;
  movies!: any[]; // Para armazenar os resultados da pesquisa

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: [''], // Inicialize com um valor vazio
    });
  }

  onSubmit() {
    const searchTerm = this.searchForm.value.searchTerm;
    if (searchTerm) {
      const apiKey = '3dacd77a8ba219ced04ee470310b7151'; // Chave de API do TMDb gera por mim, no meu user
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

      this.http.get(apiUrl).subscribe((data: any) => {
        this.movies = data.results; // Armazene os resultados da pesquisa
      });
    }
  }

  clearSearch() {
    this.searchForm.reset(); // Limpar o campo de pesquisa
    this.movies = []; // Limpar os resultados da pesquisa
  }
}
