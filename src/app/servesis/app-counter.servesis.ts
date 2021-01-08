import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCounterServesis {

  counter = 0;

  incrise() {
    this.counter++;
  }

  derise() {
    this.counter++;
  }
}
