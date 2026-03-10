import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  page: string = 'welcome';
  onListenClicked(pageName: string) {
    this.page = pageName;
    console.log(this.page);
  }
}
