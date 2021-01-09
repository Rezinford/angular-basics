import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {

  counter = 0;
  constructor(private logServise: LogService) {
  }

  incrise() {
    this.logServise.log('inc counter...');
    this.counter++;
  }

  derise() {
    this.logServise.log('decr counter...');
    this.counter--;
  }
}
