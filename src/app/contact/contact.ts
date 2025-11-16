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
    name: new FormControl(''),
    email: new FormControl(''),
    msg: new FormControl(''),
  });

  submitApplication(){
    this.contactService.submitApplication(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.msg ?? '',
    )
  };

}
