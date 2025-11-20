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

  async getById(product_id: number) : Promise<FlowersInfo | undefined> {
    const data = await fetch(`${this.url}?product_id)=${product_id}`);
    const locationJson = await data.json();
    console.log(locationJson);
    return locationJson[0];
  }

}
