import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from "@ngrx/effects";
import { LoginComponent } from "src/app/components/authentication/login/login.component";
import { SignupComponent } from "src/app/components/authentication/signup/signup.component";
import { SharedModule } from "src/app/components/shared/shared.module";
import { AuthEffects } from "./auth.effects";
import { AUTH_STATE_NAME } from "./auth.selectors";

const routes: Routes = [
    {
        path: '', children: [
            {path: '', redirectTo: 'login'},
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent}
        ]
    }
]

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature(),
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class AuthModule {

}