import {
  Component,
  inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { ToastService } from '../../services/toast.service';
import { AcToast } from './beans/ac-toast';

@Component({
  selector: 'ac-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(5%)',
          opacity: 0,
        }),
      ),
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        }),
      ),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  toastService = inject(ToastService);
  @Input() timeout!: number;
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' =
    'bottom-right';

  ngOnInit(): void {
    if (this.timeout) {
      this.toastService.timeout = this.timeout;
    }
  }

  closeToast(toast: AcToast): void {
    this.toastService.closeToast(toast);
  }
}
