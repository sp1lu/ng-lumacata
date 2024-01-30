import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { DishComponent } from '../../components/dish/dish.component';
import { TitleCasePipe } from '@angular/common';
import { Category } from '../../models/category.model';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DishComponent, TitleCasePipe, HeaderComponent, FooterComponent],
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
