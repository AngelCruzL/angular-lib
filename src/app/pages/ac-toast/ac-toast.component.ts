import { Component, inject } from '@angular/core';

import { ToastComponent } from '../../../../projects/ac-ddr/src/lib/components/toast/toast.component';
import { ToastService } from '../../../../projects/ac-ddr/src/lib/services/toast.service';

@Component({
  selector: 'app-ac-toast',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './ac-toast.component.html',
  styleUrl: './ac-toast.component.scss',
})
export default class AcToastComponent {
  #toastService = inject(ToastService);

  showInfoToast(): void {
    this.#toastService.addInfoMessage('Info', 'Info Message Body');
  }

  showSuccessToast(): void {
    this.#toastService.addSuccessMessage('Success', 'Success Message Body');
  }

  showWarningToast(): void {
    this.#toastService.addWarningMessage('Warning', 'Warning Message Body');
  }

  showErrorToast(): void {
    this.#toastService.addErrorMessage('Error', 'Error Message Body');
  }
}
