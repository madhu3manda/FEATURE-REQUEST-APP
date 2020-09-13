import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http'
import {FormControl, FormGroup,FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  title = 'feature-request-app';

}
