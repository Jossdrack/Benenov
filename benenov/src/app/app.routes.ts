import { Routes } from '@angular/router';
import { NotFoundComponent} from './other/not-found/not-found.component';
import { from } from 'rxjs';
import { HomeComponent } from './other/home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component:  LoginComponent},
    /*{
        path: 'events',
        children: [
            { path: 'search', component: EventSearchComponent },
            { path: 'edit/:id', component: EventEditComponent }
        ],
        canActivate: [AuthenticationGuard]
    },*/

    { path: 'notfound', component: NotFoundComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'notfound' }
];
