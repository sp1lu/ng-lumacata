import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DirectionsComponent } from './pages/directions/directions.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Lumacata Fabbriche 2024',
        component: HomeComponent
    },
    {
        path: 'menu',
        title: 'Menu - Lumacata Fabbriche 2024',
        component: MenuComponent
    },
    {
        path: 'dove-siamo',
        title: 'Come raggiungerci - Lumacata Fabbriche 2024',
        component: DirectionsComponent
    }
];
