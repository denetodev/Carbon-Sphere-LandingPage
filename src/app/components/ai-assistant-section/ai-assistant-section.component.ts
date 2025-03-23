import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-assistant-section',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './ai-assistant-section.component.html',
  styleUrl: './ai-assistant-section.component.scss',
})
export class AiAssistantSectionComponent {
  // Método para acionar o componente de chat
  triggerAiChat() {
    // Em um cenário real, isso poderia emitir um evento para abrir o chat
    // ou poderia usar um serviço para comunicação entre componentes
    console.log('Acionar chat de IA');

    // Como exemplo, podemos acionar diretamente o elemento do chat.
    // Isso não é a melhor prática (deveria usar serviços), mas serve como demonstração
    const chatToggle = document.querySelector('.ai-chat-toggle') as HTMLElement;
    if (chatToggle) {
      chatToggle.click();
    }
  }
}
