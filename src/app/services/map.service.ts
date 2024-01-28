import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private dataUrl: string = '../assets/json/map.geojson';

  constructor() { }

  async getData() {
    let response = await fetch(this.dataUrl);
    let geoJson = await response.json();
    return geoJson;
  }
}
