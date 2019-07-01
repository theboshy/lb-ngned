import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Location, DatePipe } from '@angular/common';


@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {
    constructor(private dataApiService: DataApiService,
        private location: Location, private datepipe: DatePipe) {

    }
    checkModel: any = { left: false, middle: true, right: false };
    public users = [];
    public usersInfo = [];
    public documentInfo = [];
    private ctrs = [];
    public isError = false;
    public msgError = '';

    ngOnInit() {
        this.dataApiService.getUsers().
            subscribe((data: any[]) => {
                this.users = data;
                this.getContacInfoDataByUSer();
                this.getDocumentInfoDataByUSer();
                this.getCountryNameDataByUser();
                this.getDocumentNameDataByUser();
            }, error => this.msgError = <any>error);


    }

    getDocumentNameDataByUser() {
        this.dataApiService.getDocuments().
            subscribe((data: any[]) => {
                this.ctrs = data;
                this.ctrs.forEach(element => {
                    this.users.forEach(val => {
                        if (element.id == val.TypeDocumentID) {

                            var add = Object.assign(val, element);
                            val = add;
                        }
                    });
                });

            }, error => this.msgError = <any>error);
    }

    getCountryNameDataByUser() {
        this.dataApiService.getCtrs().
            subscribe((data: any[]) => {
                this.ctrs = data;
                this.ctrs.forEach(element => {
                    this.users.forEach(val => {
                        if (element.COuntryCode == val.CountryCode) {
                            var add = Object.assign(val, element);
                            val = add;
                        }
                    })
                });
            }, error => this.msgError = <any>error);
    }

    getContacInfoDataByUSer() {
        this.dataApiService.getContacInfo().
            subscribe((data: any[]) => {
                this.usersInfo = data;
                this.usersInfo.forEach(element => {
                    this.users.forEach(val => {
                        if (element.UserID == val.id) {
                            if (val.isMilitar) {
                                val.isMilitar = "YES";
                            } else {
                                val.isMilitar = "NO";
                            }
                            var add = Object.assign(val, element);
                            val = add;
                        }
                    })
                });

            }, error => this.msgError = <any>error);
    }

    getDocumentInfoDataByUSer() {
        for (var val of this.users) {
            this.dataApiService.getDocumentInfo().
                subscribe((data: any[]) => {
                    this.documentInfo = data;
                    this.documentInfo.forEach(element => {
                        this.users.forEach(val => {
                            if (element.UserID == val.UserID) {
                                var add = Object.assign(val, element);
                                val = add;
                                val.DateExpedition = this.formatDate(val.DateExpedition);
                            }
                        })
                    });


                }, error => this.msgError = <any>error);
        }
    }

    formatDate(date) {
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        return latest_date;
    }


}
