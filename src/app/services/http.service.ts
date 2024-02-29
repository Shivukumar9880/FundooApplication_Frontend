import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: `Bearer ${localStorage.getItem('token')}` || ""
  })

  public baseUrl= "https://localhost:7004/api/";
   constructor(public http:HttpClient) { 

  }

  login(endPoint : String,data:Object):Observable<any>
  {
    return this.http.post(`${this.baseUrl+endPoint}`,data)
  }
 signup(endPoint:String,data:Object):Observable<any>
  {
    return this.http.post(`${this.baseUrl+endPoint}`,data)
  }
  fetchNotesCall(endPoint : String)
  {
    return this.http.get(`${this.baseUrl+endPoint}`,{headers:this.authHeader})
  }

  addNote(data:Object)
  {
    return this.http.post(`https://localhost:7004/api/Note/ADDNOTE`,data,{headers:this.authHeader})
  }
  toggleArchiveAndTrash(endPoint: String) {
    return this.http.put(`${this.baseUrl+endPoint}`,{},{headers:this.authHeader});
  }
  addcolor(endPonit:String)
  {
    return this.http.post(`${this.baseUrl+endPonit}`,{},{headers:this.authHeader})
  }


  editNote(endPoint:String,data:{})
  {
    return this.http.put(`${this.baseUrl+endPoint}`,data,{headers:this.authHeader})
  }

  deleteNote(endPoint:String)
  {
    return this.http.delete(`${this.baseUrl+endPoint}`,{headers:this.authHeader})

  }
  

}



