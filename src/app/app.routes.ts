import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Contact} from './contact/contact';
import {Flowers} from './flowers/flowers';
import {About} from './about/about';
import {Blog} from './blog/blog';
import {Basket} from './basket/basket';
import {FlowerDetail} from './flower-detail/flower-detail';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home-Flower'},
  { path: 'contact', component: Contact , title: 'Contact'},
  { path: 'flowers', component: Flowers, title: 'Flower List'},
  { path: 'about', component: About, title: 'About'},
  {path: 'blog', component: Blog, title: 'Blog'},
  {path: 'basket', component: Basket, title: 'Basket'},
  {path: 'flower-detail/:product_id', component: FlowerDetail, title: 'Flower Detail'},
];
