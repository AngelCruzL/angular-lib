import { Component, inject, Input, ViewEncapsulation } from '@angular/core';

import { SpinnerService } from '../../services/spinner.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'ac-spinner',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent {
  @Input() embedded = false;
  @Input() imagePath = './assets/images/spinner.gif';

  spinnerService = inject(SpinnerService);
}
