import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

export const isUserLoggedOutGuard = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const auth = inject(AuthService);
    const router= inject(Router);
    if(!auth.isAuthenticated()){
        return true;
    }
    router.navigate(['/users']);
    return false;
}