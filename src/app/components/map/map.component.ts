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

  ngOnInit(): void {
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
      pointToLayer: (feature, latLng) => this.createMarker(feature, latLng),
      onEachFeature: this.createPopup
    }).addTo(this.map);
  }

  private createMarker(feature: any, latLng: Leaflet.LatLng): Leaflet.Marker {
    const iconName = feature.properties.icon;
    let icon = Leaflet.icon({
      iconUrl: `../../assets/markers/${iconName}-icon.svg`,
      iconSize: [24, 40],
      iconAnchor: [12, 40],
      popupAnchor: [0, -48]
    });

    return new Leaflet.Marker(latLng, { icon: icon });
  }

  private createPopup(feature: any, layer: Leaflet.Layer): void {
    if (!feature.properties && !feature.properties.title && !feature.properties.map) return;

    const popupContent =
      `
      <div style="text-align: center">
          <h4 style="margin: 0 0 4px 0">${feature.properties.title}</h4>
          <a href="${feature.properties.maps}" target="_blank">Guarda su Google Maps</a>
      </div>
      `
      ;
      
    layer.bindPopup(popupContent);
  }
}