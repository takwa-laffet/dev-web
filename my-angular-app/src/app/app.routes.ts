import { Routes } from '@angular/router';
import {MonComposant} from './mon-composant/mon-composant';
import {App} from './app';
import { MonComposant2 } from './mon-composant2/mon-composant2';
import { Composont3 } from './composont3/composont3';
import { TasksComponet } from './tasks-componet/tasks-componet';
import { Formulair } from './formulair/formulair';
import { ReactiveForm } from './reactive-form/reactive-form';
export const routes: Routes = [
    {path:'',component: App},
    {path:'exmple1',component: MonComposant},
    {path:'exmple2/:userName',component: MonComposant2},
    {path:'exmple3',component: Composont3},
    {path:'tasks',component: TasksComponet},
    {path:'contact',component: Formulair},
    {path:'reactive-form',component: ReactiveForm}
];
