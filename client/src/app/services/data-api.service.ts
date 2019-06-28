import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class DataApiService {
    constructor(private http: HttpClient) { }
    books: Observable<any>;
    book: Observable<any>;

    getCtrs() {
        const url_api = `http://localhost:3000/api/country-tbs`;
        return this.http.get(url_api);
    }

    getDocuments() {
        const url_api = `http://localhost:3000/api/type-document-tbs`;
        return this.http.get(url_api);
    }

    getUsers() {
        const url_api = `http://localhost:3000/api/app-user-tbs`;
        return this.http.get(url_api);
    }

}
