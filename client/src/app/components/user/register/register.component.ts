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
import { Router } from '@angular/router';



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild(SelectorDocumentComponent) selectDocumentView: SelectorDocumentComponent;
    constructor(private authService: AuthService,
        private location: Location,
        private router: Router,
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

            this.authService.registerUser(userId, this.user, this.tpdocument, this.contactInfo).subscribe(                                                                                                                                                          
                
                (errr: any) => {
                    this.onIsError(errr);
                },
                (succs: any) => {
                    console.log("2"+succs)
                }
                
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
        if (error typeof 'undefined') {
            this.onSucc();
            setTimeout(() => {
                //this.router.navigate(['/user/register?refresh=1']);
                window.location.reload();
            },
            1000);
            
        }
        if (error.error.error.driver) {
            this.alerts.setMessage("document is taken", 'error');
        } else {
            let ind = 0;

            for (var property in error.error.error.details.messages) {
                ind++;
                if (error.error.error.details.messages.hasOwnProperty(property)) {
                    if (error.error.error.details.messages[property] instanceof Array) {
                        this.alerts.setMessage(property + " : " + error.error.error.details.messages[property], 'error');
                    }
                }
            }
        }
        //this.alerts.setMessage(error.Message, 'error');

    }
}
