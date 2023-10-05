import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})

export class ContatoComponent {
  title = 'Entre em contato conosco!';
  dados: any;
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, this.customNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.dados = data;
    });
  }

  customNameValidator(control: FormControl) {
    const name = control.value;
    const pattern = /^[a-zA-Z\s]{3,}$/; // Só letras e mínimo de 3 caracteres
    if (!pattern.test(name)) {
      return { invalidName: true };
    }
    return null;
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const name = this.messageForm.get('name')?.value;
      const email = this.messageForm.get('email')?.value;
      const message = this.messageForm.get('message')?.value;
      // Aqui você pode adicionar a lógica para enviar os dados para um endpoint de captação de dados
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Mensagem:', message);
      this.messageForm.reset();
    }
  }
}


