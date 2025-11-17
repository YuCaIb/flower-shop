import {Component, inject, input} from '@angular/core';
import {FlowersInfo} from '../flowers-info';
import {RouterLink} from '@angular/router';
import {BasketService} from '../basket-service';

@Component({
  selector: 'app-fower-list',
  imports: [RouterLink],
  templateUrl: './fower-list.html',
  styleUrl: './fower-list.css',
})
export class FowerList {
  flowerList = input.required<FlowersInfo>();
  basketService = inject(BasketService);

/*  addToBasket() {
    this.basketService.addToBasket();
  }*/
}
