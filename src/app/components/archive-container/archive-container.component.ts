import { Component, OnInit } from '@angular/core';
import { AnyTxtRecord } from 'dns';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {

  notesList: any[] = [];
  // filteredNotesList: any[] = [];

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.fetchNotes().subscribe((res: any) => {
      this.notesList = res.data;
      console.log(this.notesList)
      this.notesList = this.notesList.filter(note => note.isArchieve === true);
      console.log(this.notesList)
    });
  }

  archiveNotesList($event:any){
    $event.action == 'edit'? 
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
      ):
    this.notesList=this.notesList.filter(
      (data:{id:number})=>{
          return data.id != $event.data.id
      }
      )
  }
}
