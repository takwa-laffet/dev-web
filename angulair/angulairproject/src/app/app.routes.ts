import { Routes } from '@angular/router';
import { Login } from './login/login';
import {MonComposant}from './mon-composant/mon-composant';

export const routes: Routes = [
    {
        path:"count",
        component:Login
    },
    {
        path:"task",
        component:MonComposant
    }
];
