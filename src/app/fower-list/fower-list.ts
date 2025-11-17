import {Component, input} from '@angular/core';
import {FlowersInfo} from '../flowers-info';

@Component({
  selector: 'app-fower-list',
  imports: [],
  templateUrl: './fower-list.html',
  styleUrl: './fower-list.css',
})
export class FowerList {
  flowerList = input.required<FlowersInfo>();

}
