import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
  isScrolled = false;
  scrollProgress = 0;
  activeSection = '';
  sections: string[] = ['about', 'benefits', 'services', 'market', 'contact'];
  sectionOffsets: { [key: string]: number } = {};

  constructor() {}

  ngOnInit() {
    // Verificar se já rolou ao carregar a página
    this.checkScroll();
  }

  ngAfterViewInit() {
    // Calcular as posições das seções após o DOM estar pronto
    setTimeout(() => {
      this.calculateSectionOffsets();
    }, 500);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.updateScrollProgress();
    this.detectActiveSection();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.calculateSectionOffsets();
  }

  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollPosition > 50;
  }

  updateScrollProgress() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
  }

  calculateSectionOffsets() {
    this.sections.forEach((section) => {
      const element = document.querySelector(`#${section}`);
      if (element) {
        this.sectionOffsets[section] =
          element.getBoundingClientRect().top + window.pageYOffset - 100;
      }
    });
  }

  detectActiveSection() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Encontrar a seção atual baseada na posição de rolagem
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      if (scrollPosition >= (this.sectionOffsets[section] || 0)) {
        if (this.activeSection !== section) {
          this.activeSection = section;
        }
        break;
      }
    }

    // Se estiver no topo da página, não destacar nenhuma seção
    if (scrollPosition < 100) {
      this.activeSection = '';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevenir rolagem do body quando o menu estiver aberto
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Ajuste para compensar a altura do navbar
        behavior: 'smooth',
      });
    }
  }
}
