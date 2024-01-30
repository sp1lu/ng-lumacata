import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { IndicationsComponent } from '../../components/indications/indications.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-directions',
  standalone: true,
  imports: [MapComponent, IndicationsComponent, FooterComponent],
  templateUrl: './directions.component.html',
  styleUrl: './directions.component.scss'
})
export class DirectionsComponent {

}
