import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AlertsService } from 'angular-alert-module';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    constructor(private authService: AuthService, private location: Location, private alerts: AlertsService) {

    }
    public user: UserInterface = {
        id: '',
        LastName: '',
        Name: '',
        isMilitar: '',
        isTemporal: '',
        username: '',
        email: '',
        password: '',
        timeCreated: ''
    };

    public isError = false;
    public msgError = '';

    ngOnInit() { }

    onRegister(form: NgForm): void {
        if (form.valid) {
            console.log(this.user)

            this.authService.registerUser(this.user.LastName, this.user.Name, this.user.isMilitar, this.user.isTemporal, this.user.username, this.user.email, this.user.password).
                subscribe((data: {}) => {
                   //maldito sync
                });

        } else {
            this.onIsError("");
        }

    }
    onSucc() {
        this.alerts.setMessage('Saved successfully!', 'success');
    }

    onIsError(error): void {
        this.alerts.setMessage(error, 'error');
        this.isError = true;
        setTimeout(() => {
            this.isError = false;
        }, 4000);
    }
}
