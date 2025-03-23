import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {}
