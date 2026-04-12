import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dentistes } from './dentistes/dentistes';
import { Detailsd } from './detailsd/detailsd';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dentistes', component: Dentistes },
  {path:'detailsd/:id',component:Detailsd}
];
