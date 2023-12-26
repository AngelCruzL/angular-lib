import { Component } from '@angular/core';

import { AcJoinPipe } from '../../../../projects/ac-ddr/src/lib/pipes/ac-join.pipe';

@Component({
  selector: 'app-ac-join-pipe',
  standalone: true,
  imports: [AcJoinPipe],
  templateUrl: './ac-join-pipe.component.html',
  styleUrl: './ac-join-pipe.component.scss',
})
export default class AcJoinPipeComponent {
  values = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  valuesEmpty = [];
}
