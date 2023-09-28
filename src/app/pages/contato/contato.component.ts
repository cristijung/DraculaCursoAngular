import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})

export class ContatoComponent {
  //título do texto
  title = 'Entre em contato conosco!';
  dados: any;
  messageForm: FormGroup;


  //duas propriedades no construtor - explicar
  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.dados = data;
    });
  }


  onSubmit() {
    if (this.messageForm.valid) {
      const name = this.messageForm.get('name')?.value;
      const email = this.messageForm.get('email')?.value;
      const message = this.messageForm.get('message')?.value;
      // aqui --- configuração de envio para qualquer lugar
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Mensagem:', message);
      this.messageForm.reset();
    }
  }


}
