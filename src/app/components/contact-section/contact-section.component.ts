import { Component, OnInit } from '@angular/core';
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
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  formSuccess = false;
  formError = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Se necessário, inicializar animações AOS ou outros scripts
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.formSuccess = false;
    this.formError = false;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    // Simulação de envio para o backend
    setTimeout(() => {
      try {
        // Em produção, aqui seria enviado para o backend
        console.log('Formulário enviado:', this.contactForm.value);

        this.formSuccess = true;
        this.contactForm.reset();
        this.submitted = false;

        // Opcional: Mostrar toast ou notificação de sucesso
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        this.formError = true;
      } finally {
        this.loading = false;
      }
    }, 1500); // Simulando tempo de resposta do servidor
  }

  triggerAiChat() {
    // Encontra e ativa o chat de IA
    const chatToggle = document.querySelector('.ai-chat-toggle') as HTMLElement;
    if (chatToggle) {
      chatToggle.click();
    } else {
      console.warn('Elemento de chat não encontrado');
      // Implementação alternativa se o botão não existir
    }
  }
}
