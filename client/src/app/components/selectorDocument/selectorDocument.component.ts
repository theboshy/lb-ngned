import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { TypeDocumentInterface } from 'src/app/models/type-interface';

@Component({
    selector: 'app-selector-document',
    templateUrl: './selectorDocument.component.html',
    styleUrls: ['./selectorDocument.component.css']
})
export class SelectorDocumentComponent implements OnInit {
    constructor(private dataApiService: DataApiService) {

    }
    model;
    public tpdocument: TypeDocumentInterface = {
        Document: '',
        PlaceExpedition: '',
        DateExpedition: ''
    };

    public coutr = [];
    public isError = false;
    public msgError = '';

    ngOnInit() {
        this.dataApiService.getDocuments().
            subscribe((data: any[]) => {
                this.coutr = data;
            }, error => this.msgError = <any>error);
    }

    onRegister(){}

    onChange(newValue) {
        console.log(newValue);
    }

}
