import { Component, OnInit, Injectable, ViewChild, EventEmitter, Output } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { TypeDocumentInterface } from 'src/app/models/type-interface';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-selector-document',
    templateUrl: './selectorDocument.component.html',
    styleUrls: ['./selectorDocument.component.css']
})
@Injectable()
export class SelectorDocumentComponent implements OnInit {

    @ViewChild('formDocument') ngForm: NgForm;

    constructor(private dataApiService: DataApiService) {
    }
    model;
    public tpdocument: TypeDocumentInterface = {
        TypeDocumentID : '',
        Document: '',
        PlaceExpedition: '',
        DateExpedition: ''
    };

    public documents = [];
    public isError = false;
    public msgError = '';

    @Output() formChangeEvent = new EventEmitter<boolean>();
    @Output() formChangeDataEvent = new EventEmitter<TypeDocumentInterface>();

    ngOnInit() {
        this.onRegisterFormChange(this.ngForm);
        this.dataApiService.getDocuments().
            subscribe((data: any[]) => {
                this.documents = data;
                this.documents.unshift("");
            }, error => this.msgError = <any>error);
    }

    onRegisterFormChange(ngform: NgForm): void {
        ngform.form.valueChanges.subscribe(x => {
            this.formChangeEvent.emit(ngform.valid && 0 !== this.tpdocument.TypeDocumentID.length)
            if (ngform.valid && 0 !== this.tpdocument.TypeDocumentID.length) {
                this.formChangeDataEvent.emit(this.tpdocument);
            }
        })
    }

    onChange(newValue) {
        this.tpdocument.TypeDocumentID = newValue;
    }

}
