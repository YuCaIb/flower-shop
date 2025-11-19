import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BasketService} from '../basket-service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  basketService= inject(BasketService);

}
