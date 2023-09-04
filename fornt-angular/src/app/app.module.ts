import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/br'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component'; 
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import localePtBr from '@angular/common/locales/pt';


registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ 
    {
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faEdit, faTrash, faUserPlus)
  }
 }
