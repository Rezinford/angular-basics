import { Component, OnInit } from '@angular/core';
import {AppCounterService} from '../servesis/app-counter.service';
import {LocalCounterService} from '../servesis/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(private appCounterService: AppCounterService,
              private localCounterService: LocalCounterService) {

  }


}
