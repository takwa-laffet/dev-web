import { Routes } from '@angular/router';
import { Login } from './login/login';
import { MyComponet } from './my-componet/my-componet';
import { Tasks } from './tasks/tasks';
import { UserCard } from './user-card/user-card';
export const routes: Routes = [
    {
        path:"count",
        component:Login
    },
    {
        path:"task",
        component:Tasks
    },
    {
        path:"user",
        component:MyComponet

    },
    {
        path:"card",
        component:UserCard

    }
];
