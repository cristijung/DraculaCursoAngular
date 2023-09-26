import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title='Resumo | Drácula de Bram Stoker'
  url= '../../../assets/drc.png';
  alt='Drácula'


}
