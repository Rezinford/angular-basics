import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], serch: string = '', field: string = 'title'): Post[] {
    if (!serch.trim()) {
      return posts;
    }
    return posts.filter(post => {
      return post[field].toLowerCase().includes(serch.toLowerCase());
    });
  }

}
