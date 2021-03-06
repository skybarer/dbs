import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MaterialModule } from './modules/material/material.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApplicationContactInfoComponent } from './containers/application-contact-info/application-contact-info.component';
import { EnterpriseInformationComponent } from './containers/enterprise-information/enterprise-information.component';
import { SelectAccountTypeComponent } from './containers/select-account-type/select-account-type.component';
import { BankOfServiceApplicationComponent } from './containers/bank-of-service-application/bank-of-service-application.component';
import { FileUplaodComponent } from './containers/file-uplaod/file-uplaod.component';
import { ConfirmComponent } from './containers/confirm/confirm.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    StepperComponent,
    NavbarComponent,
    ApplicationContactInfoComponent,
    EnterpriseInformationComponent,
    SelectAccountTypeComponent,
    BankOfServiceApplicationComponent,
    FileUplaodComponent,
    ConfirmComponent,
    CheckboxGroupComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
