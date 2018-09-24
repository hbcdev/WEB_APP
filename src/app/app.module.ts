import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClaimComponent } from './claim/claim.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataTableModule } from "angular-6-datatable";
import { ModalClaimComponent } from './modal-claim/modal-claim.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FaxClaimComponent } from './fax-claim/fax-claim.component';
import { ModalFaxComponent } from './modal-fax/modal-fax.component';
import { WebClaimComponent } from './web-claim/web-claim.component';
import { PrecretComponent } from './precret/precret.component';
import { CookieService } from 'ngx-cookie-service';
// import { ApiService } from '';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'assess', component: ClaimComponent },
    { path: 'faxcliam', component: FaxClaimComponent },
    { path: 'web', component: WebClaimComponent },
    { path: 'admin', component: UsersComponent },
    { path: 'precert', component: PrecretComponent },
    { path: '**', component: NotFoundComponent }

];



@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        SlideBarComponent,
        LoginComponent,
        ClaimComponent,
        NotFoundComponent,
        ModalClaimComponent,
        UsersComponent,
        FaxClaimComponent,
        ModalFaxComponent,
        WebClaimComponent,
        PrecretComponent,

    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        AngularFontAwesomeModule,
        ReactiveFormsModule,
        DataTableModule,
        NgbModule.forRoot(),
        HttpClientModule
        // ModalClaimComponent

    ],
    entryComponents: [
        ModalClaimComponent,
        ModalFaxComponent
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
