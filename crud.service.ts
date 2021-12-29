import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url ="http://localhost:3000/studetails";
  constructor(private http:HttpClient) { }
  post(data:any)
  {
    return this.http.post(this.url,data);
  }
  get()
  {
    return this.http.get(this.url);
  }
  delete(Id:any)
  {
    return this.http.delete(this.url +"/"+Id);
  }
  update(Id:any,data:any)
  {
    return this.http.put(this.url+"/"+Id,data);
  }
  }
