import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Location, DatePipe } from '@angular/common';


@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html'
})
export class UserListComponent implements OnInit {
    constructor(private dataApiService: DataApiService,
        private location: Location, private datepipe: DatePipe) {

    }
    checkModel: any = { left: false, middle: true, right: false };
    public users = [];
    public usersContacInfo = [];
    public isError = false;
    public msgError = '';

    ngOnInit() {
        this.dataApiService.getUsers().
            subscribe((data: any[]) => {
                //console.log(data);
                this.users = data;
                this.getContacInfoDataByUSer();
                this.getDocumentInfoDataByUSer();
            }, error => this.msgError = <any>error);
    }

    getContacInfoDataByUSer() {
        for (var val of this.users) {
            this.dataApiService.getContacInfoByUserId(val.id).
                subscribe((data: {}) => {
                    var merge = Object.assign(val, data);
                    val = merge;
                }, error => this.msgError = <any>error);

        }
    }

    getDocumentInfoDataByUSer() {
        for (var val of this.users) {
            this.dataApiService.getDocumentInfoByUserId(val.id).
                subscribe((data: {}) => {
                    var merge = Object.assign(val, data);
                    merge.DateExpedition = this.formatDate(merge.DateExpedition);
                    val = merge;
                }, error => this.msgError = <any>error);

        }
    }

    formatDate(date) {
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        return latest_date;
    }


}
