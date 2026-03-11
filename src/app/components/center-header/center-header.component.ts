import {
  Component,
  EventEmitter,
  Input,
  Output,
  output,
  ɵɵdeferEnableTimerScheduling,
} from '@angular/core';
import { exit } from 'process';

@Component({
  selector: 'app-center-header',
  standalone: false,
  templateUrl: './center-header.component.html',
  styleUrl: './center-header.component.scss',
})
export class CenterHeaderComponent {
  @Input() pageListen: string = 'welcome';
  @Input() newPage: boolean = false;
  @Output() page = new EventEmitter<string>();
  isClickedWelcome: boolean = true;
  isClickedUser: boolean = false;
  isClickedProjet: boolean = false;

  onPageClicked(nomPage: string): number {
    var result: number = 0;
    if (nomPage == 'welcome') {
      /*this.isClickedWelcome = true;
      this.isClickedUser = false;
      this.isClickedProjet = false;*/
      result = 1;
    } else if (nomPage == 'user' || nomPage == 'README.md') {
      /*this.isClickedWelcome = false;
      this.isClickedUser = true;
      this.isClickedProjet = false;*/
      result = 2;
    } else if (nomPage == 'newFile') {
      result = 4;
    } else {
      /*this.isClickedWelcome = false;
      this.isClickedUser = false;
      this.isClickedProjet = true;*/
      result = 3;
    }
    this.page.emit(nomPage);
    return result;
  }
}
