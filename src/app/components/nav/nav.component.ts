import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  public isOpen: boolean;
  private subscription: Subscription;

  constructor(private communicationService: CommunicationService, private renderer: Renderer2, private el: ElementRef) {
    this.isOpen = false;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.communicationService.toggleNav$.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
      this.toggleNav();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleNav(): void {
    this.isOpen ? this.renderer.addClass(this.el.nativeElement, 'is-open') : this.renderer.removeClass(this.el.nativeElement, 'is-open');
  }

  closeNav(): void {
    this.communicationService.toggleNav(false);
  }
}
