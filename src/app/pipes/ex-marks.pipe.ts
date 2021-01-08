import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  transform(str: string): string {
    // tslint:disable-next-line:no-non-null-assertion
    return `${str.trim()}!!!!!`;
  }

}
