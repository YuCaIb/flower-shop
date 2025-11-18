import { Injectable } from '@angular/core';
import {FlowersInfo} from './flowers-info';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {

  url = "http://localhost:3000/FlowersInfo";


  async getAllFlowersInfo(): Promise<FlowersInfo[]> {
    const data = await fetch(this.url);

    return (await data.json()) ?? [];
  }

}
