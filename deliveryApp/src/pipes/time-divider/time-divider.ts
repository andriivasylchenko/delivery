import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timedivider'
})
@Injectable()
export class TimeDividerPipe implements PipeTransform {

  transform(items: any[], args: any[]): any {
      return items.filter(item => item.time == args[0]);
  }
}