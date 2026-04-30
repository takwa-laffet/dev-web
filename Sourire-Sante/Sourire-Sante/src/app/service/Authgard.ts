import { inject } from '@angular/core';
import { ServiceAuth } from './serviceAuth';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
const service=inject(ServiceAuth);
const route=inject(Router);
if(service.islogedin()){
    return true;}
else{
    route.navigate(["/login"]);
    return false;}
}