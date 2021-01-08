import {Injectable} from '@angular/core';

@Injectable()
export class LocalCounterService {
  counter = 0;

  incrise() {
    this.counter++;
  }

  derise() {
    this.counter++;
  }
}
