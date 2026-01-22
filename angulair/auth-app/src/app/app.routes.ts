import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Setting } from './setting/setting';
import { AuthGuard } from './dashboard/auth.guard';
import { Admin } from './admin/admin';
import { Resolver } from './setting/Resolver';
import { Template } from './template/template';
import { Reactive } from './reactive/reactive';
import { Formarry } from './formarry/formarry';
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
        component: Dashboard,
        canActivate:[AuthGuard],
        children:[
            {path:"profile/:id", component: Profile},
            {path:"setting", component: Setting,
                resolve:{
                    Users:Resolver
                }
            }
        ]
    },   {
        path:"admin",
        loadComponent : ()=> import('./admin/admin').then(m => m.Admin)
    },
{
    path:"template",
    component:Template
},
{
path:"reactive",
component:Reactive
},{
    path:"array",
    component:Formarry
},
    {
        path:"**",
        component: NotFound
    }
];
