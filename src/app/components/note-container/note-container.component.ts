import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss']
})
export class NoteContainerComponent implements OnInit {

  notesList:any[]=[];
  constructor(public noteService:NoteService) { }

  // ngOnInit(): void {
  //   this.noteService.fetchNotes().subscribe((res:any)=>{this.notesList=res.data})
    
  // }

  ngOnInit(): void {

    this.noteService.fetchNotes().subscribe((res: any) => {
      this.notesList = res.data;
      console.log('Initial notesList:', this.notesList);
  
      this.notesList = this.notesList.filter(note => {

        return !(note.isArchieve || note.isTrash) && !(note.isArchieve && note.isTrash);
      });
  
      console.log('Filtered notesList:', this.notesList);
    });
  }
  

  updateNotesList($event:any)
  {
    
    if($event.action=="add")
    {
      this.notesList=[$event.data,...this.notesList]
    }
    else if($event.action=="archive" || $event.action=="trash" )
    {
      this.notesList=this.notesList.filter(note=>note.id!=$event.data.id)
    }
    else if($event.action=="color")
    {
    
      this.notesList=this.notesList.map(ele=>{
        if(ele.id==$event.data.id ){
          return $event.data
        }else{
          return ele
        }
      })
      console.log(this.notesList);
      
    }
    else if($event.action =='edit')
    {
      this.notesList = this.notesList.map(
        res =>
        {
          if(res.id == $event.data.id)
          {
            return $event.data;
          }
          else
            return res;
        }
      )
    }
    else if($event.action=='delete')
    {
      this.notesList = this.notesList.map(
        res =>
        {
          if(res.id == $event.data.id)
          {
            return $event.data;
          }
          else
            return res;
        }
      )
    }

    
  }
  
 

}
