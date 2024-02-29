import { HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  

  constructor(public httpService:HttpService) { }

  addNote(data:object)
  {
    return this.httpService.addNote(data)
  }
  fetchNotes()
  {
    return this.httpService.fetchNotesCall("Note/GetAllNotes")
  }
  toggleArchiveAndTrash(endPoint:String){
    return this.httpService.toggleArchiveAndTrash(endPoint)
  }
  addColor(endPoint:String)
  {
    return this.httpService.addcolor(endPoint);
  }

  editNote(data:{id:Number,title:string,description:string})
  {
    
    return this.httpService.editNote(`Note/UpdateNote?noteid=${data.id}`,data)
  }
  deleteNote(endPoint:String)
  {
    return this.httpService.deleteNote(endPoint)

  }
}
