import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FeatureComponentComponent } from './feature-component/feature-component.component';
import {FeatureapiService} from './featureapi.service'
@NgModule({
  declarations: [
    AppComponent,
    FeatureComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FeatureapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
