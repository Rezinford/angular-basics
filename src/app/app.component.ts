import {Component, OnInit} from '@angular/core';
import {AppCounterServesis} from './servesis/app-counter.servesis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appCounterService: AppCounterServesis) {

  }
}


