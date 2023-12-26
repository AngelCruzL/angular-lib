import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acJoin',
  standalone: true,
})
export class AcJoinPipe implements PipeTransform {
  transform(value: string[], splitter: string = ','): string {
    if (!value) return 'sin valores';

    return value.join(splitter);
  }
}
