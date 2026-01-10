import { Routes } from '@angular/router';
import { Login } from './login/login';
import { MyComponet } from './my-componet/my-componet';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
    {
        path:"count",
        component:Login
    },
    {
        path:"",
        component:Tasks
    },
    {
        path:"user",
        component:MyComponet

    }
];
