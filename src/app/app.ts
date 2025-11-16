import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, RouterLink],
  template: `
    <main>
      <header>
        <nav>
          <ul>
            <li><a href="/">
              <img src="daisy.svg" alt="resim çıkmadı" width=64 height=64>
            </a></li>
            <li><a href="#">Flowers</a></li>
            <li><a routerLink="/contact">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      <section>
        <br>
        <router-outlet></router-outlet>
      </section>
    </main>


  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flower-shop');


}
