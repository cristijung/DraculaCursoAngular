import { Component, Input } from '@angular/core';
import { personagensData } from 'src/app/components/img-cracteres/personagens-data';

@Component({
  selector: 'app-img-cracteres',
  templateUrl: './img-cracteres.component.html',
  styleUrls: ['./img-cracteres.component.scss']
})

export class ImgCracteresComponent {
  title = 'Principais personagens';


  //esta opção é para trabalhar com two-way data binding
  @Input() nomePersonagem: string = ''; // aqui vai a entrada para o nome do personagem
  // Função para obter o URL da imagem com base no nome do personagem
  getImagemUrl(): string {
    const personagem = personagensData.find(p => p.nome === this.nomePersonagem);
    return personagem ? personagem.imagemUrl : '';
  }
}
