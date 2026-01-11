import { Routes } from '@angular/router';
import {Quiz} from "./quiz/quiz";
import { Result } from './result/result';
export const routes: Routes = [

    {path:'quiz', component: Quiz},
    {path:'result', component: Result},
];
