import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assistir',
  templateUrl: './assistir.component.html',
  styleUrls: ['./assistir.component.scss']
})
export class AssistirComponent implements OnInit {
  searchForm!: FormGroup; //verificar
  movies!: any[];  //verificar

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {}

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
          searchTerm: [''],
        });
    }

    onSubmit() {
      const searchTerm = this.searchForm.value.searchTerm;
      if (searchTerm) {
        const apiUrl = `https://www.omdbapi.com/?s=${searchTerm}`;

        this.http.get(apiUrl).subscribe((data: any) => {
          this.movies = data.Search; // Armazene os resultados da pesquisa
        });
      }
    }
  }

}
