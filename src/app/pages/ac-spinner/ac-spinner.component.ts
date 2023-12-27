import { Component, inject } from '@angular/core';

import { SpinnerService } from '../../../../projects/ac-ddr/src/lib/services/spinner.service';
import { SpinnerComponent } from '../../../../projects/ac-ddr/src/lib/components/spinner/spinner.component';

@Component({
  selector: 'app-ac-spinner',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './ac-spinner.component.html',
  styleUrl: './ac-spinner.component.scss',
})
export default class AcSpinnerComponent {
  isEmbedded = false;
  #spinnerService = inject(SpinnerService);

  startSpinner(): void {
    // this.#spinnerService.spinnerDuration = 5000;
    this.#spinnerService.showSpinner();
  }

  changeEmbeddedMode(): void {
    this.isEmbedded = !this.isEmbedded;
  }
}
