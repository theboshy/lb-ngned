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
import * as uuid from 'uuid';
import { ResponseInterface } from 'src/app/models/response-interface';
import { DataApiService } from 'src/app/services/data-api.service';


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
        private selectDocument: SelectorDocumentComponent,
        private dataApiService: DataApiService) {
    }

    public isDocumentFormValid = false;
    public isCountryFormValid = false;

    private tpdocument: TypeDocumentInterface = {
        TypeDocumentID: '',
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

    private persistUser = false;
    private persistConatc = false;
    private persistDocument = false;

    errorObj = {} as ResponseInterface;

    ngOnInit() {
    }

    onRegister(form: NgForm): void {
        if (form.valid) {

            let userId = new Date().getUTCMilliseconds().toString();
            console.log(this.user)

            this.authService.registerUser(userId,
                this.user.LastName, this.user.Name, this.user.isMilitar,
                this.user.isTemporal, this.user.username,
                this.user.email, this.user.password).subscribe(
                    (err: ResponseInterface) => {
                        if (err.IsError) {
                            this.onIsError(err);
                        }
                    },
                    succ => { this.onSucc(); this.persistUser=true},
                );


            this.dataApiService.saveContacInfo(userId, this.contactInfo.CountryID,
                this.contactInfo.Address, this.contactInfo.City, this.contactInfo.Phone, this.contactInfo.CellPhone
                , this.contactInfo.EmergencyName, this.contactInfo.EmergencyPhone).subscribe(
                    (err: ResponseInterface) => {

                       this.persistConatc = true;
                    },
                    succ => { },
                );



            this.dataApiService.saveDocumentInfo(userId, this.tpdocument.TypeDocumentID,
                this.tpdocument.Document, this.tpdocument.PlaceExpedition, this.tpdocument.DateExpedition).subscribe(
                    (err: ResponseInterface) => {
                        this.persistDocument = true;
                    },
                    succ => { },
                );

        } else {

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
        this.alerts.setMessage(error.Message, 'error');
        let ind = 0;
        console.log(error.Messages)
        for (var property in error.Messages) {
            ind++;
            if (error.Messages.hasOwnProperty(property)) {
                if (error.Messages[property] instanceof Array) {
                    this.alerts.setMessage(property + " : " + error.Messages[property], 'error');
                }
            }
        }


    }
}
