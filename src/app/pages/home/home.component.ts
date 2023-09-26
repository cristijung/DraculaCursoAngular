import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

//aqui explicar OnInit
export class HomeComponent implements OnInit {
  title = 'Resumo | Drácula de Bram Stoker';
  url = '../../../assets/drc.png';
  alt = 'Drácula';
  image = '../../../assets/drc2.png';

  dados: any;
  constructor(private dataService: DataService) {}

  //aqui explicar a diretiva ngOnInit
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.dados = data;
    });
  }
}
