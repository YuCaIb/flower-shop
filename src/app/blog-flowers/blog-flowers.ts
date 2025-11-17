import { Component, input} from '@angular/core';
import {FlowersInfo} from '../flowers-info';

@Component({
  selector: 'app-blog-flowers',
  imports: [],
  templateUrl: './blog-flowers.html',
  styleUrl: './blog-flowers.css',
})
export class BlogFlowers {
flowerBlog = input.required<FlowersInfo>();
}
