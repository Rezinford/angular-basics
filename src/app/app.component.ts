import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required]
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
          country: new FormControl('ua'),
          city: new FormControl('', Validators.required)
        })
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submited: ', this.form);
      const formData = {...this.form.value};
      console.log('Form Data', formData);
    }
  }
}
