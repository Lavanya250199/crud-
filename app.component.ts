import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  studetails:any;
  show:any;
  data:any;
  
}
