import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Lumacata Fabbriche 2024',
        component: HomeComponent
    },
    {
        path: 'menu',
        title: 'Lumacata Fabbriche 2024 - Menu',
        component: MenuComponent
    }
];
