import { Injectable } from '@angular/core';

import { AcToastConstants } from '../constants/ac-toast';

@Injectable({
  providedIn: 'root',
})
export class AcConstantsService {
  AcToastConstants = AcToastConstants;
}
