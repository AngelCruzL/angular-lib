import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: { name: string; path: string }[] = [
    { name: 'pipe join', path: 'pipe-join' },
    { name: 'spinner', path: 'spinner' },
    { name: 'toast', path: 'toast' },
  ];
}
