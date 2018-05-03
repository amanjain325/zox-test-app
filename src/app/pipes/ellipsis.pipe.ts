import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  transform(str: string, maxCharLength: number): string {
    if(str && maxCharLength && !Number.isNaN(maxCharLength) && str.length-3 > maxCharLength) {
        str = str.slice(0, maxCharLength) + '...';
    }
    return str;
  }
}