import { Component, OnInit, ɵConsole, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SelectorDocumentComponent } from 'src/app/components/selectorDocument/selectorDocument.component';
import { UserInterface } from 'src/app/models/user-interface';
import { TypeDocumentInterface } from 'src/app/models/type-interface';
import { ContacInfoInterface } from 'src/app/models/contactinfo-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild(SelectorDocumentComponent) selectDocumentView: SelectorDocumentComponent;
    constructor(private authService: AuthService,
        private location: Location,
        private alerts: AlertsService,
        private selectDocument: SelectorDocumentComponent) {
    }

    public isDocumentFormValid = false;
    public isCountryFormValid = false;

    private tpdocument: TypeDocumentInterface = {
        NameTypedDocument : '',
        Document: '',
        PlaceExpedition: '',
        DateExpedition: ''
    };

    public contactInfo: ContacInfoInterface = {
        Address: '',
        City: '',
        Phone: '',
        CellPhone: '',
        EmergencyName: '',
        EmergencyPhone: '',
    };


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

    ngOnInit() {
    }

    onRegister(form: NgForm): void {

        if (form.valid) {
            console.log(this.tpdocument);
            console.log(this.contactInfo);
            console.log(this.user);

            this.authService.registerUser(this.user.LastName, this.user.Name, this.user.isMilitar, this.user.isTemporal, this.user.username, this.user.email, this.user.password).
                subscribe((data: {}) => {
                    //
                });

        } else {
            this.onIsError("");
        }

    }

    /**"" */
    onDocumentFormChange($event) {
        this.isDocumentFormValid = $event;
    }

    onFormDocumentDataToPersit($event) {
        this.tpdocument = $event;
    }
    /**"" */

    /**"" */
    onFormCountryChange($event) {
        this.isCountryFormValid = $event;
    }

    onFormCountryDataToPersit($event) {
        this.contactInfo = $event
    }
    /**"" */


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
