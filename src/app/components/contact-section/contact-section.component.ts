import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Em produção, aqui seria enviado para o backend
    console.log('Formulário enviado:', this.contactForm.value);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

    this.contactForm.reset();
    this.submitted = false;
  }

  triggerAiChat() {
    const chatToggle = document.querySelector('.ai-chat-toggle') as HTMLElement;
    if (chatToggle) {
      chatToggle.click();
    }
  }
}
