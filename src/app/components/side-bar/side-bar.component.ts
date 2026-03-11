import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClicked(functionName: string) {
    this.buttonClicked.emit(functionName);
  }
}
