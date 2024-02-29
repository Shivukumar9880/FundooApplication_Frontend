import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { error } from 'console';
import { NoteService } from 'src/app/services/note-service/note.service';
import { COLLABRATOR_ICON, COLOR_PALATTE_ICON, DELETE_FOREVER_ICON, IMG_ICON, MORE_ICON, REMINDER_ICON, RESTORE_ICON, TRASH_ICON, UNARCHIVE_ICON } from 'src/assets/svg-icons (1)';
import { EditNodeComponent } from '../edit-node/edit-node.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() noteObj:any={}
  @Input() container!:string
  @Output() updateList=new EventEmitter<{}>()

  containers:boolean=true 
   constructor( public noteService:NoteService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog:MatDialog) { 
    iconRegistry.addSvgIconLiteral("image-icon", sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral("collaborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("color-pallet-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral("unarchive-icon", sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("more-icon", sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    
    iconRegistry.addSvgIconLiteral("restore-icon", sanitizer.bypassSecurityTrustHtml(RESTORE_ICON ))
    iconRegistry.addSvgIconLiteral("delete-icon", sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))




  }
  ngOnInit(): void {
  }
  handleNoteOperations(action:string){
 
    if(action==="archive"){
  
      this.noteService.toggleArchiveAndTrash(`Note/ToggleArchive?noteId=${this.noteObj.id}`).subscribe((res:any)=>{
        console.log(res);
        this.updateList.emit({action:"archive",data:{id:res.data.id}})
      },
      error=>console.log(error)
      )
    }
    else if(action==="trash")
    {
      this.noteService.toggleArchiveAndTrash(`Note/ToggleTrash?noteId=${this.noteObj.id}`).subscribe(res=>{

        this.updateList.emit({action:"trash",data:{id:this.noteObj.id}})
      //    this.updateList.emit({title:this.title,description:this.desc})

      })
    }
    else{
      //noteId=34&color=%23EFEFF1
      const encodedColor = encodeURIComponent(action);

      
       this.noteService.addColor(`Note/AddColor?noteId=${this.noteObj.id}&color=${encodedColor}`).subscribe((res:any) => { 

        this.updateList.emit({action:"color",data:res.data})}
      )
      
    }
    //
   
  }



  openEditNote() {
    const dialogRef = this.dialog.open(EditNodeComponent,{data:this.noteObj});
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.title,result.description);
      this.updateList.emit({action:"edit",data:result})
      // console.log(`Dialog result: ${result.title,result.description}`);
    });
  
  }

  deleteNote(action:string)
  {
    //Note/DeleteNoteById?noteId=46
    this.noteService.deleteNote(`Note/DeleteNoteById?noteId=${this.noteObj.id}`).subscribe((res:any) => { 

      this.updateList.emit({action:"delete",data:res.result})}
    )
  }
 
  // Assuming this code is within a method or function in your Angular component or service
}


