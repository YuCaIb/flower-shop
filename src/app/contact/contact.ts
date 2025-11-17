import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from '../contact-service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactService = inject(ContactService);

  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', {validators: [Validators.required,Validators.email]}),
    msg: new FormControl('', {validators: [Validators.required, Validators.minLength(250)]}),
  });

  submitApplication() {
    if (this.applyForm.invalid){
      console.log('Form validation failed');
      return;
    }
    this.contactService.submitApplication(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.msg ?? '',
    )
  };

}
