import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-about',
  imports: [ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // Opcional: Adicionar lógica futura, como abrir uma página "Saiba Mais"
  onLearnMore() {
    console.log('Redirecionando para página de detalhes...');
    // Exemplo: window.location.href = '/learn-more';
  }
}
