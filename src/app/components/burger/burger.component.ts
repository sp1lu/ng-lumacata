import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss'
})
export class BurgerComponent {
  public isOpen: boolean;

  constructor(private communicationService: CommunicationService) {
    this.isOpen = false;
  }

  burgerClick() {
    this.isOpen = !this.isOpen;
    this.communicationService.toggleNav(this.isOpen);
  }
}