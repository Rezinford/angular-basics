import {Component, OnInit} from '@angular/core';
import {AppCounterServesis} from './servesis/app-counter.servesis';
import {LocalCounterService} from './servesis/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent {

  constructor(private appCounterService: AppCounterServesis,
              private localCounterService: LocalCounterService) {

  }
}


