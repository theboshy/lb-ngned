import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContacInfoInterface } from 'src/app/models/contactinfo-interface';
import { map, catchError } from 'rxjs/operators';
import { UserInterface } from '../models/user-interface';
import { ResponseInterface } from 'src/app/models/response-interface';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataApiService {
    constructor(private htttp: HttpClient) { }

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    getCtrs() {
        const url_api = `http://localhost:3000/api/country-tbs`;
        return this.htttp.get(url_api);
    }

    getDocuments() {
        const url_api = `http://localhost:3000/api/type-document-tbs`;
        return this.htttp.get(url_api);
    }

    getUsers() {
        const url_api = `http://localhost:3000/api/app-user-tbs`;
        return this.htttp.get(url_api);
    }


    getDocumentInfo() {
        const url_api = `http://localhost:3000/api/user-document-tbs`;
        return this.htttp.get(url_api);
    }
    getContacInfo() {
        const url_api = `http://localhost:3000/api/contactinfo_tbs`;
        return this.htttp.get(url_api);
    }

    getContacInfoByUserId(id) {
        const url_api = `http://localhost:3000/api/app-user-tbs/${id}/contact-info`;
        return this.htttp.get(url_api).pipe(map(data => data));
    }

    getCountryNameById(id) {
        const url_api = `http://localhost:3000/api/country-tbs/${id}`;
        return this.htttp.get(url_api);
    }

    getDocumentInfoByUserId(id) {
        const url_api = `http://localhost:3000/api/app-user-tbs/${id}/user-document`;
        return this.htttp.get(url_api);
    }

    getDocumentNameByID(id) {
        const url_api = `http://localhost:3000/api/type-document-tbs/${id}/`;
        return this.htttp.get(url_api);
    }

    saveContacInfo(
        UserID: string,
        CountryID: string,
        Address: string,
        City: string,
        Phone: string,
        CellPhone: string,
        EmergencyName: string,
        EmergencyPhone: string
    ) {
        const url_api = 'http://localhost:3000/api/contactinfo_tbs';
        const modal = {} as ResponseInterface;

        return this.htttp.post<any>(url_api,
            {
                UserID: UserID,
                CountryID: CountryID,
                Address: Address,
                City: City,
                Phone: Phone,
                CellPhone: CellPhone,
                EmergencyName: EmergencyName,
                EmergencyPhone: EmergencyPhone
            }, { headers: this.headers })
            .pipe(map((res: Response) => console.log("en json : " + res.json())),
                catchError((error: any) => {

                    modal.Status = error.status;
                    modal.IsError = true;
                    modal.Messages = error.error.error.details.messages;
                    if (error.status == 422) {
                        modal.Message = "Data duplication error";
                    } else if (error.status == 500) {
                        modal.Message = "Internal server error ";
                    }

                    return of(modal);
                }));
    }

    saveDocumentInfo(
        UserID?: string,
        TypeDocumentID?: string,
        Document?: string,
        PlaceExpedition?: string,
        DateExpedition?: string,
    ) {
        const url_api = 'http://localhost:3000/api/user-document-tbs';
        const modal = {} as ResponseInterface;

        return this.htttp.post<any>(url_api,
            {
                UserID: UserID,
                TypeDocumentID: TypeDocumentID,
                Document: Document,
                PlaceExpedition: PlaceExpedition,
                DateExpedition: DateExpedition,
            },
            { headers: this.headers })
            .pipe(map((res: Response) => console.log("en json : " + res.json())),
                catchError((error: any) => {

                    modal.Status = error.status;
                    modal.IsError = true;
                    modal.Messages = error.error.error.details.messages;
                    if (error.status == 422) {
                        modal.Message = "Data duplication error";
                    } else if (error.status == 500) {
                        modal.Message = "Internal server error ";
                    }

                    return of(modal);
                }));

    }

}
