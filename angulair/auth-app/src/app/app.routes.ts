import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Home } from './home/home';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path:"",
        component: Home
    },
    {
        path:"login",
        component: Login
    },
    {
        path:"dashboard",
        component: Dashboard
    },
    {
        path:"profile/:id", //url dynamic
        component: Profile
    },
    {
        path:"**",
        component: NotFound
    }

];
