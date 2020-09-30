import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    InicioComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
