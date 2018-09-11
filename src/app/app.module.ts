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

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'claim', component: ClaimComponent },
    { path: 'admin', component: UsersComponent },
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
        UsersComponent

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
        // ModalClaimComponent

    ],
    entryComponents: [ModalClaimComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
