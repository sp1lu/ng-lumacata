import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DishComponent } from '../../components/dish/dish.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DishComponent, TitleCasePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public menu: any;

  constructor(public DataService: DataService) {

  }

  async ngOnInit() {
    this.menu = await this.DataService.getMenu();
    console.log(this.menu);    
  }
}
