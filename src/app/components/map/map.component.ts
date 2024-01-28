import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private map!: Leaflet.Map;
  private geoJsonData: any;

  constructor(public mapService: MapService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private async initMap() {
    this.map = Leaflet.map('map', { zoomControl: false }).setView([44.44061405644311, 8.736987188621248], 13);

    Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.geoJsonData = await this.mapService.getData();
    Leaflet.geoJSON(this.geoJsonData, {
      pointToLayer: (feature, latLng) => Leaflet.circle(latLng),
      onEachFeature: this.createPopup
    }).addTo(this.map);
  }

  private createPopup(feature: any, layer: Leaflet.Layer) {
    if (!feature.properties && !feature.properties.title && !feature.properties.map) return;

    const popupContent =
      `
      <div style="text-align: center">
          <h4 style="margin: 0 0 4px 0">${feature.properties.title}</h4>
          <a href="${feature.properties.maps}" target="_blank">Guarda su Google Maps</a>
      </div>
      `
      ;

    layer.bindPopup(feature.properties.title);
    layer.bindPopup(popupContent);
  }
}