import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.scss']
})
export class GaleriaComponentComponent {
  texto: any;  //está any para poder receber outros tipos de texto no json
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.texto = data;
    });
  }


  title = 'Imagens do Filme';
  stitle = 'Bram Stoker';

  images = [
    { url: '../../../assets/dracula.png', caption: 'Gary Oldman como Drácula'},
    { url: '../../../assets/dracula2.png', caption: 'Riqueza de detalhes no cenário e figurino'},
    { url: '../../../assets/dracula3.png', caption: 'Conde Dracul'},
    { url: '../../../assets/dracula4.png', caption: 'Personagem Lucy, num dos figurinos mais emblemáticos do filme'},
    { url: '../../../assets/dracula5.jpg', caption: 'Gary Oldman e Winona Ryder'},
    { url: '../../../assets/dracula6.jpg', caption: 'Keanu Reeves e Gary Oldman'},
  ];

}
