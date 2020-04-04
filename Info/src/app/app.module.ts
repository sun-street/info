import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PhoneTableComponent } from './components/phone-table/phone-table.component';

const appRoutes: Routes = 
[
    { path: 'phone', component: PhoneTableComponent },
];

@NgModule
({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [ MainComponent, PhoneTableComponent],
    bootstrap:    [ MainComponent ]
})

export class AppModule { }