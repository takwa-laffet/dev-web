import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
export const AuthGuard: CanActivateFn = () =>{
    const router = inject(Router);
    const login = sessionStorage.getItem('login');
    if(login){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
}