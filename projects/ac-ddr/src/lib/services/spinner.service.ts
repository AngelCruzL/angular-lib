import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinnerDuration = 1500;
  #isSpinnerVisible = signal<boolean>(false);
  isSpinnerVisible = computed(() => this.#isSpinnerVisible());

  showSpinner(): void {
    this.#isSpinnerVisible.set(true);

    setTimeout(() => {
      this.hideSpinner();
    }, this.spinnerDuration);
  }

  hideSpinner(): void {
    this.#isSpinnerVisible.set(false);
  }
}
