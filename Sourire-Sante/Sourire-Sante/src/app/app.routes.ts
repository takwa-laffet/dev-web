import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dentistes } from './dentistes/dentistes';
import { Detailsd } from './detailsd/detailsd';
import { Patients } from './patients/patients';
import { Login } from './login/login';
import { authGuard } from './service/Authgard';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dentistes', component: Dentistes },
  {path:'detailsd/:id',component:Detailsd},
  {path:'patients', component:Patients,canActivate:[authGuard]},
  {path:'login',component:Login}
];
