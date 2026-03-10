import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-center-header',
  standalone: false,
  templateUrl: './center-header.component.html',
  styleUrl: './center-header.component.scss',
})
export class CenterHeaderComponent {
  @Output() page = new EventEmitter<string>();
  isClickedWelcome: boolean = true;
  isClickedUser: boolean = false;
  isClickedProjet: boolean = false;

  onPageClicked(nomPage: string) {
    if (nomPage == 'welcome') {
      this.isClickedWelcome = true;
      this.isClickedUser = false;
      this.isClickedProjet = false;
    } else if (nomPage == 'user') {
      this.isClickedWelcome = false;
      this.isClickedUser = true;
      this.isClickedProjet = false;
    } else {
      this.isClickedWelcome = false;
      this.isClickedUser = false;
      this.isClickedProjet = true;
    }
    this.page.emit(nomPage);
  }
}
