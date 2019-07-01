import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/components/user/register/register.component';
import { LoginUserComponent } from 'src/app/components/user/login/login.component';
import { SelectorComponent } from 'src/app/components/selectorCountry/selector.component';
import { UserListComponent } from 'src/app/components/user/list/list.component';
import { SelectorDocumentComponent } from 'src/app/components/selectorDocument/selectorDocument.component';
import { Page404Component } from 'src/app/components/page404/page404.component';
import { CanActivateViaAuthGuard } from 'src/app/guards/def.guard';


//import { CanActivateViaAuthGuard } from './guards/def.guard';

const routes: Routes = [
    //{ path: '', component: HomeComponent },
    { path: 'user/register', component: RegisterComponent },
    { path: 'selector', component: SelectorComponent },
    { path: 'selectorDocument', component: SelectorDocumentComponent },
    { path: 'user/userList', component: UserListComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'user/userLogin', component: LoginUserComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
