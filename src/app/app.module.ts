import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { DataviewComponent } from './pages/dataview/dataview.component';
import {DataViewModule} from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    DataviewComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    DataViewModule,
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
