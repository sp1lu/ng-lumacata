import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private map!: Leaflet.Map;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap() {
    this.map = Leaflet.map('map', { zoomControl: false }).setView([44.44061405644311, 8.736987188621248], 13);

    const tiles = Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    tiles.addTo(this.map);
  }
}
