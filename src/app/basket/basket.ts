import {Component, inject} from '@angular/core';
import {BasketService} from '../basket-service';
import {BasketItems} from '../basket-items/basket-items';

@Component({
  selector: 'app-basket',
  imports: [
    BasketItems
  ],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {

  basketService = inject(BasketService);
}
