import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-explorer',
  standalone: false,
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss',
})
export class ExplorerComponent {
  @Output() page = new EventEmitter<string>();

  sections: { [key: string]: boolean } = {
    openEditor: false,
    portfolio: false,
    portfolioSrc: false,
    outline: false,
    timeline: false,
  };

  files: { [key: string]: string[] } = {
    openEditor: ['README.md', 'Liste_projet.json'],
    portfolio: ['README.md', 'Liste_projet.json'],
    portfolioSrc: [
      'app.component.ts',
      'app.component.html',
      'app.component.scss',
      'explorer.component.ts',
      'explorer.component.html',
    ],
    outline: [],
    timeline: [],
  };

  toggle(section: string): void {
    this.sections[section] = !this.sections[section];
  }

  getFileIcon(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'ts':
        return 'fa-file-code-o';
      case 'html':
        return 'fa-html5';
      case 'scss':
      case 'css':
        return 'fa-css3';
      case 'json':
        return 'fa-file-text-o';
      case 'md':
        return 'fa-file-text-o';
      default:
        return 'fa-file-o';
    }
  }

  clickFile(nom: string) {
    this.page.emit(nom);
  }
}
