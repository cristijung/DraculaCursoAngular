import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
  title = 'Erro 404';
  stitle = 'Página não encontrada';
  url = '../../../assets/dracula7.jpg';
  alt = 'Error404';
  description = 'Algo';

}
