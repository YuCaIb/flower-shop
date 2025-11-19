import {Component, signal} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <main>
      <app-header/>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>


  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flower-shop');
}
