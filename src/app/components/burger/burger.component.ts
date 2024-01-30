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
  private subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.isOpen = false;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.communicationService.toggleNav$.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isOpen = target.checked;
    this.communicationService.toggleNav(this.isOpen);
  }
}