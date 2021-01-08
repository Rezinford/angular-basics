import {Component, OnInit} from '@angular/core';


export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Bear', text: 'Somsin'},
    {title: 'Bread', text: 'Somsin 2'},
    {title: 'JavaScript', text: 'EEEEEE'}
  ];
  search: '';
  searchField = 'title';

  addPost() {
    this.posts.unshift({
      title: 'TT',
      text: 'fsdfsdf'
    });
  }
}


