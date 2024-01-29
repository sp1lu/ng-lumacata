import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { DishComponent } from '../../components/dish/dish.component';
import { TitleCasePipe } from '@angular/common';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DishComponent, TitleCasePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public menu!: Category[];

  constructor(public MenuService: MenuService) { }

  async ngOnInit() {
    this.menu = await this.MenuService.getMenu();
  }
}
