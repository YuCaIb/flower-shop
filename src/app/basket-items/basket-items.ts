import {Component, inject, input} from '@angular/core';
import {FlowersInfo} from '../flowers-info';
import {BasketService} from '../basket-service';

@Component({
  selector: 'app-basket-items',
  imports: [],
  templateUrl: './basket-items.html',
  styleUrl: './basket-items.css',
})
export class BasketItems {
  basketService = inject(BasketService);
  item = input.required<FlowersInfo>();

}
