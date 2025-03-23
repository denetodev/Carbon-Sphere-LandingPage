import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { MarketPotentialSectionComponent } from './components/market-potential-section/market-potential-section.component';
import { AiAssistantSectionComponent } from './components/ai-assistant-section/ai-assistant-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AiChatComponent } from './components/shared/ai-chat/ai-chat.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ServicesSectionComponent,
    MarketPotentialSectionComponent,
    AiAssistantSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    AiChatComponent,
    HeroComponent,
    AboutComponent,
    BenefitsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'carbon-sphere';
}
