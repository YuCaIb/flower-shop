import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CostumValidators {
  static spaceValidator(control : AbstractControl): ValidationErrors | null {
    /* Sadece space basılarak doldurulan inputları valide etmek için kullanılan fonksiyon.
     checks if only white spaces.*/
    if(control.value && control.value.length) {
      let isOnlyWhiteSpace = (control.value || '').trim().length === 0;
      let isValid = !isOnlyWhiteSpace;
      return isValid ? null : {'onlywhitespace': true} ;
    }
    return null;
  } ;

/*https://youtu.be/d39mapIdLes?si=Q-gWcmdixZwOYSTd&t=427*/
}
