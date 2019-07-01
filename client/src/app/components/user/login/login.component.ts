import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginUserComponent implements OnInit {
    constructor(private authService: AuthService,
        private router: Router,
        private location: Location,
        private alerts: AlertsService) {

    }
    private user: UserInterface = {
        email: '',
        password: ''
    };
    public isError = false;

    ngOnInit() {
        this.onCheckUser();
    }

    onLogin(form: NgForm) {

        if (form.valid) {
            return this.authService
                .loginuser(this.user.email, this.user.password)
                .subscribe(
                    data => {
                        //console.log(data)
                        this.authService.setUser(data.userId);
                        const token = data.id;
                        this.authService.setToken(token);
                        this.router.navigate(['/user/userList']);
                        this.isError = false;
                        location.reload();
                    },
                    error => { console.log(error); this.onIsError() }
                );
        } else {
            this.onIsError();
        }
    }

    onCheckUser(): void {
        if (this.authService.getCurrentUser() === null) {
            //--errro?
        } else {
            this.router.navigate(['/user/userList']);
        }
    }

    onIsError(): void {
        this.isError = true;
        this.alerts.setMessage("An error occurred when logging in", 'error');
        //console.log("ocurrio un error al loguear")
        setTimeout(() => {
            this.isError = false;
        }, 4000);
    }


}
