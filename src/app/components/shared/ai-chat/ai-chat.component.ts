import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss',
})
export class AiChatComponent {
  isOpen = false;
  userMessage = '';
  messages: { sender: 'ai' | 'user'; text: string }[] = [
    {
      sender: 'ai',
      text: 'Olá! Sou a assistente virtual da Carbon Sphere. Como posso ajudar você hoje?',
    },
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    // Adiciona mensagem do usuário
    this.messages.push({
      sender: 'user',
      text: this.userMessage,
    });

    const userInput = this.userMessage;
    this.userMessage = '';

    // Simula resposta da IA (em produção, isso seria uma chamada de API)
    setTimeout(() => {
      let response =
        'Desculpe, não entendi sua pergunta. Posso ajudá-lo com informações sobre a Carbon Sphere, créditos de carbono ou como nossos serviços funcionam.';

      if (
        userInput.toLowerCase().includes('crédito') ||
        userInput.toLowerCase().includes('carbono')
      ) {
        response =
          'Créditos de carbono são certificados negociáveis que representam a redução de emissões de gases de efeito estufa. A Carbon Sphere facilita a medição, certificação e comercialização desses créditos através de nossa plataforma blockchain.';
      } else if (
        userInput.toLowerCase().includes('como funciona') ||
        userInput.toLowerCase().includes('plataforma')
      ) {
        response =
          'Nossa plataforma integra blockchain e IA para automatizar todo o ciclo de créditos de carbono, desde a medição de emissões até a comercialização dos créditos. Isso reduz custos, aumenta a transparência e facilita o acesso ao mercado.';
      } else if (
        userInput.toLowerCase().includes('contato') ||
        userInput.toLowerCase().includes('falar')
      ) {
        response =
          'Você pode entrar em contato com nossa equipe através do formulário na seção de contato ou pelo email contato@carbonsphere.com.';
      }

      this.messages.push({
        sender: 'ai',
        text: response,
      });
    }, 1000);
  }
}
