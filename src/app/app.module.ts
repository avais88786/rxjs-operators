import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RxjsOperatorsComponent } from './rxjs-operator/rxjs-operator.component';
import { ApiCallerService } from './api-caller.service';


@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ApiCallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
