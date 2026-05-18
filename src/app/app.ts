import { Component, signal } from '@angular/core';
import { CalculaMedia } from './calcula-media/calcula-media';

@Component({
  selector: 'app-root',
  imports: [CalculaMedia],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('media');
}
