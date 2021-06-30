import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LoadingComponent } from './components/loading/loading.component';
// @Decorator
@NgModule({
  //metadata
  declarations: [AppComponent, LoadingComponent], // khai báo component
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    InputTextModule,
    PanelModule,
    RippleModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    ConfirmPopupModule,
    BrowserAnimationsModule,
    MessagesModule,
    ConfirmDialogModule,
  ], // nhập module khác vào
  providers: [DataService, ConfirmationService, MessageService], // khai báo service
  bootstrap: [AppComponent],
})
export class AppModule {}
