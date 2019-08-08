import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { ContactRequest } from 'src/app/models/contact-request';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  countries = ['USA', 'Germany', 'Italy', 'France'];

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    this.submitted = true;
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    if (this.contactForm.invalid) {
      return;
  }

    console.log(result);
  }
  revert() {
    // Resets to blank object
    this.submitted = false;
    this.contactForm.reset();

  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get country() { return this.contactForm.get('country'); }

}
