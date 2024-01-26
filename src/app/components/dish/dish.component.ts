import { Component, Input } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  @Input() public dish!: Dish;
}