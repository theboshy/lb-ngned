import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html'
})
export class UserListComponent implements OnInit {
    constructor(private dataApiService: DataApiService, private location: Location) {

    }
    checkModel: any = { left: false, middle: true, right: false };
    public users = [];
    public isError = false;
    public msgError = '';

    ngOnInit() {
        this.dataApiService.getUsers().
            subscribe((data: any[]) => {
                //console.log(data);
                this.users = data;
            }, error => this.msgError = <any>error);
    }

}
