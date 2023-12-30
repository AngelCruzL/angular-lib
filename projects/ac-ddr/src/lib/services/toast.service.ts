import { computed, inject, Injectable, signal } from '@angular/core';

import { AcConstantsService } from './ac-constants.service';
import { AcToast, ToastParams } from '../components/toast/beans/ac-toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  #constants = inject(AcConstantsService).AcToastConstants;
  #toasts = signal<AcToast[]>([]);
  toasts = computed(() => this.#toasts());
  #timeout = this.#constants.TIME_OUT;

  get timeout(): number {
    return this.#timeout;
  }

  set timeout(value: number) {
    this.#timeout = value;
  }

  addInfoMessage(title: string, message: string): void {
    this.#addMessage({ message, type: this.#constants.TYPE_INFO, title });
  }

  addSuccessMessage(title: string, message: string): void {
    this.#addMessage({ message, type: this.#constants.TYPE_SUCCESS, title });
  }

  addWarningMessage(title: string, message: string): void {
    this.#addMessage({ message, type: this.#constants.TYPE_WARNING, title });
  }

  addErrorMessage(title: string, message: string): void {
    this.#addMessage({ message, type: this.#constants.TYPE_ERROR, title });
  }

  closeToast(toast: AcToast): void {
    this.#toasts.update((toasts) => toasts.filter((t) => t !== toast));
  }

  #addMessage({ message, type, title }: ToastParams): void {
    let toast = new AcToast({ title, message, type });
    this.#toasts.update((toasts) => [...toasts, toast]);

    setTimeout(() => {
      this.closeToast(toast);
    }, this.#timeout);
  }
}
