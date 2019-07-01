import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { SelectorComponent } from 'src/app/components/selectorCountry/selector.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from 'src/app/components/user/list/list.component';
import { FormsModule } from '@angular/forms';
import { DataApiService } from 'src/app/services/data-api.service';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SelectorDocumentComponent } from 'src/app/components/selectorDocument/selectorDocument.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertsModule } from 'angular-alert-module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent,
        RegisterComponent,
        Page404Component,
        SelectorComponent,
        SelectorDocumentComponent,
        UserListComponent,
        TruncateTextPipe
    ],
    imports: [AlertsModule.forRoot(), BrowserAnimationsModule, BsDatepickerModule.forRoot(), AccordionModule,
    TabsModule.forRoot(), BsDropdownModule.forRoot(), BrowserModule,
        AppRoutingModule, HttpClientModule, FormsModule, NgxSpinnerModule,
        NgxPaginationModule, BsDropdownModule.forRoot(), TabsModule.forRoot(), AccordionModule.forRoot()],
    providers: [DataApiService, SelectorDocumentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
