import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  submitApplication(name:string, email:string, msg:string) {
    console.log(`Contact form recived, name: ${name} email ${email} message ${msg}`);
  }
}
