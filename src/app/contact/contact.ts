import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from '../contact-service';
import {CostumValidators} from '../validators/costum-validators';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactService = inject(ContactService);

  applyForm = new FormGroup({
    name: new FormControl('', {validators: [Validators.required, CostumValidators.spaceValidator, Validators.minLength(3)]}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    msg: new FormControl('', {validators: [Validators.required, Validators.minLength(250), CostumValidators.spaceValidator, Validators.maxLength(500)]}),
  });

  submitApplication() {
    if (this.applyForm.invalid) {
      console.log('Form validation failed');
      window.alert("Please enter valid; email and min 250 char message");
      return;
    }
    this.contactService.submitApplication(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.msg ?? '',
    )
  };

}
