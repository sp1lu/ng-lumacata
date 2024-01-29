import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { IndicationsComponent } from '../../components/indications/indications.component';

@Component({
  selector: 'app-directions',
  standalone: true,
  imports: [MapComponent, IndicationsComponent],
  templateUrl: './directions.component.html',
  styleUrl: './directions.component.scss'
})
export class DirectionsComponent {

}
