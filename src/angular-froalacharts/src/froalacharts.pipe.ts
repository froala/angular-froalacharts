import {Injectable, PipeTransform, Pipe} from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'froalachartsPipe'
})
@Injectable()
export class FroalaChartsPipe implements PipeTransform {
  transform(value: any, args?: any[]): string {
    return value;
  }
}
