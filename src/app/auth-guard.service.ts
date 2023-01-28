import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard {
    
    constructor(private authService: AuthService, private router: Router){}

    canActivate(router: ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
                if(authenticated){
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );

        return true;
    }   
}