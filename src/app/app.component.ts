import {Component, OnInit} from '@angular/core';
import {AppCounterService} from './servesis/app-counter.service';
import {LocalCounterService} from './servesis/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent {

  constructor(private appCounterService: AppCounterService,
              private localCounterService: LocalCounterService) {

  }
}


