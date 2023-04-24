import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './User/listar/listar.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import{ServiceService}from '../app/Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
