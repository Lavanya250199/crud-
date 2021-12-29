import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CrudService } from '../crud.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  studetails:any;
  show:any;
  data:any;


  constructor(private c:CrudService, private fb:FormBuilder) { }
  stuform =this.fb.group(
{
  Name:[],Dept:[],Age:[],Address:[],City:[]
}
   )
  
  ngOnInit(): void {
  }
  send()
  {
    this.show =true;
    let data=this.stuform.value;
    this.c.post(data).subscribe();
    this.get();
    alert("data saved")
  }
  get() {
    this.c.get().subscribe((data) =>this.studetails =data);
    console.log("data geting");
    
  }
  delete(Id:any)
  {
    this.c.delete(Id).subscribe();
  }
  update(Id:any,data:any)
  {586
    this.c.update(Id,data).subscribe();
  }

  

}
