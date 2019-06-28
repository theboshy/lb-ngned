import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { CountryInterface } from 'src/app/models/country-interface';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
    constructor(private dataApiService: DataApiService) {

    }

    private country: CountryInterface = {
        CountryName: '',
        CountryCode: '',
    };

    public coutr = [];
    public selectedCountry = '';
    public isError = false;
    public msgError = '';

    ngOnInit() {
        this.dataApiService.getCtrs().
            subscribe((data: any[])  => {
                this.coutr = data;
            }, error => this.msgError = <any>error);
    }

    onRegister(){}

    onChange(newValue) {
        console.log(newValue);
    }

}
