import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'sdfsdf', text: 'sdfsf', id: 1},
    {title: 'sdfs', text: 'sdffsf', id: 12}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log('Post', post);
  }

  removePosts(id: number) {
    console.log('Id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}


