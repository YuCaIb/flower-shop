import {Component, inject, input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FlowersInfo} from '../flowers-info';
import {BasketService} from '../basket-service';
import {FlowerService} from '../flower-service';

@Component({
  selector: 'app-flower-detail',
  imports: [],
  templateUrl: './flower-detail.html',
  styleUrl: './flower-detail.css',
})
export class FlowerDetail {
  route : ActivatedRoute = inject(ActivatedRoute);
  basketService = inject(BasketService);


  flowerList: FlowersInfo | undefined;
  flowerService = inject(FlowerService);

  constructor() {
    const flowerId = parseInt(this.route.snapshot.params['product_id'], 10);
    this.flowerService.getById(flowerId).then((flowerList) => {this.flowerList=flowerList;});
  }
}
