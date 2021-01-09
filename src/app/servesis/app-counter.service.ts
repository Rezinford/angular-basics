import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {

  counter = 0;

  incrise() {
    this.counter++;
  }

  derise() {
    this.counter--;
  }
}
