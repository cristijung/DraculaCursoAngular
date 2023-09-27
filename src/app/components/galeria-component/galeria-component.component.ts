import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.scss']
})
export class GaleriaComponentComponent {
  title = 'Imagens do Filme';

  images = [
    { url: '../../../assets/dracula.png', caption: 'Drácula'},
    { url: '../../../assets/dracula2.png', caption: 'Drácula'},
    { url: '../../../assets/dracula3.png', caption: 'Drácula'},
    { url: '../../../assets/dracula4.png', caption: 'Drácula'},
    { url: '../../../assets/dracula5.jpg', caption: 'Drácula'},
    { url: '../../../assets/dracul6.jpg', caption: 'Drácula'},
  ];

}
