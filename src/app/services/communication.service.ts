import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private toggleNavSource = new Subject<boolean>();
  public toggleNav$ = this.toggleNavSource.asObservable();

  constructor() { }

  toggleNav(isOpen: boolean) {
    this.toggleNavSource.next(isOpen);
  }
}