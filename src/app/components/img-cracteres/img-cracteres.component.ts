import { Component } from '@angular/core';

@Component({
  selector: 'app-img-cracteres',
  templateUrl: './img-cracteres.component.html',
  styleUrls: ['./img-cracteres.component.scss']
})

export class ImgCracteresComponent {
  title = 'Principais personagens';


  imageUrl: string = ''; // Propriedade para armazenar o URL da imagem
  shouldDisplay: boolean = false; // Propriedade para controlar a exibição da imagem

  // Função chamada quando o URL da imagem é alterado
  onImageUrlChange() {
    // Quando o URL da imagem é alterado, ocultamos a imagem
    this.shouldDisplay = false;
  }

  // Função para alternar a exibição da imagem
  toggleImage() {
    this.shouldDisplay = !this.shouldDisplay;
  }
}
