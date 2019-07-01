import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        //console.log("guard trigered")
        //super secure val
        if (this.authService.getCurrentUser()) {
            return true;
        }
        this.router.navigate(['/user/userLogin']);
        return false;
    }
}
