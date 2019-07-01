import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(private authService: AuthService, private location: Location) { }
    public app_name = 'Users List';
    public isLogged = false;

    verifiedLog() {
        this.isLogged = this.authService.isLogged();
    }

    ngOnInit() {
        this.verifiedLog();
        this.onCheckUser();
        //play some music?
    }

    onLogout(): void {
        this.authService.logoutUser();
        location.reload();
    }

    onCheckUser(): void {
        if (this.authService.getCurrentUser() === null) {
            this.isLogged = false;
        } else {
            this.isLogged = true;
        }
    }
}
