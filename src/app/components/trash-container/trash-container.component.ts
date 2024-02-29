import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {

  notesList: any[] = [];
  // filteredNotesList: any[] = [];

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.fetchNotes().subscribe((res: any) => {
      this.notesList = res.data;
      console.log(this.notesList)
      this.notesList = this.notesList.filter(note => note.isTrash === true);
      console.log(this.notesList)
    });
  }
  // updateTrash($event:any)
  // {
  //   $event.action == 'trash'? 
  //     this.notesList = this.notesList.map(
  //       res =>
  //       {
  //         if(res.id == $event.data.id)
  //         {
  //           return $event.data;
  //         }
  //         else
  //           return res;
  //       }
  //     ):console.log("hello")
  // }

  updateTrash($event:any){
    if($event.action == 'trash')
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
    this.notesList=this.notesList.filter(
      (data:{id:number})=>{
          return data.id != $event.data.id
      }
      )
    }
    else if( $event.action == 'delete' )
    {
      this.notesList = this.notesList.filter(
        res =>
        {
           return res.id != $event.data
        }
      )
    this.notesList=this.notesList.filter(
      (data:{id:number})=>{
          return data.id != $event.data.id
      }
      )
    } 
   
  }
}
