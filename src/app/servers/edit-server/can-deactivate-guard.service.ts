import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot,  } from "@angular/router";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  curreentState: RouterStateSnapshot,
                  nestState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    return component.canDeactivate();
                  }
}