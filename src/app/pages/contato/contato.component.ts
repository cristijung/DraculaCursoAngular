import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})

export class ContatoComponent {
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
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
