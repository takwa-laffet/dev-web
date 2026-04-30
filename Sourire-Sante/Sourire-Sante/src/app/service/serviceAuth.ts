import { inject, Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class ServiceAuth {
    islogedin=signal<boolean>(localStorage.getItem("token")!==null);
    private route=inject(Router);
    login(email:string,password:string){
        if(email==="takwa5@gmail.com" && password==="123456"){
            localStorage.setItem("token","this is takwa");
            this.islogedin.set(true);
            this.route.navigate(["/patients"]);
        }
    }
    logout(){
        localStorage.removeItem("token");
        this.islogedin.set(false);
        this.route.navigate(["/login"]);
    }
}