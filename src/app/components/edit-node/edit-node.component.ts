import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-edit-node',
  templateUrl: './edit-node.component.html',
  styleUrls: ['./edit-node.component.scss'],
})
export class EditNodeComponent implements OnInit {

  title:string=""
  desc:string=""
  id!:number
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title:string,description:string,id:number},public dialogRef: MatDialogRef<EditNodeComponent>,public noteService:NoteService)
{
  this.title=data.title
  this.desc=data.description
  this.id=data.id
}
  ngOnInit(): void {
  }

  handleEditNote()
  { 
     console.log(this.title,this.desc);
    this.noteService.editNote({...this.data,title:this.title,description:this.desc,id:this.id}).subscribe(res=>{
    this.dialogRef.close({...this.data,title:this.title,description:this.desc})
    })
 
   }
}
