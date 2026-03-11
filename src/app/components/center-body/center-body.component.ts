import { I18nPluralPipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-center-body',
  standalone: false,
  templateUrl: './center-body.component.html',
  styleUrl: './center-body.component.scss',
})
export class CenterBodyComponent {
  @Input() pageBody: string = 'welcome';
  onCliked: boolean = false;


}
