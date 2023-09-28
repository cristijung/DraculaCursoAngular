import { Component, Input } from '@angular/core';
import { personagensData } from 'src/app/components/img-cracteres/personagens-data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-img-cracteres',
  templateUrl: './img-cracteres.component.html',
  styleUrls: ['./img-cracteres.component.scss']
})

export class ImgCracteresComponent {
  title = 'Principais personagens';
  dados: any;
  personagens = personagensData;
  selectedPersonagem: string = '';

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.dados = data;
    });
  }

  //esta opção é para trabalhar com two-way data binding
  getImagemUrl(): string {
    const personagem = this.personagens.find(p => p.nome === this.selectedPersonagem);
    return personagem ? personagem.imagemUrl : '';
  }
}
