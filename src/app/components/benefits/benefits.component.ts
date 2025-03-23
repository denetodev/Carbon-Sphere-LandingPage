import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-benefits',
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {}
