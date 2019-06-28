import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        //super secure val
        if (false) {
            console.log("guard trigered")
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
