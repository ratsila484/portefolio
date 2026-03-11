import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  page: string = 'welcome';
  functionName: boolean = false;
  onListenClicked(pageName: string) {
    this.page = pageName;
    console.log(this.page);
  }

  onButtonSideClicked(functionName: string) {
    if (functionName == 'newFile') {
      this.functionName = true;
    }
    console.log(this.functionName);
  }
}
