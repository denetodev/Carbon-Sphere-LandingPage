import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-market-potential-section',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './market-potential-section.component.html',
  styleUrl: './market-potential-section.component.scss',
})
export class MarketPotentialSectionComponent {}
