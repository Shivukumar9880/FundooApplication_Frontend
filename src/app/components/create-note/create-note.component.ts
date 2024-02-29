import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from 'src/app/services/note-service/note.service';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, PIN_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, TRASH_ICON, UNARCHIVE_ICON, UNDO_ICON } from 'src/assets/svg-icons (1)';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  title:String="";
  desc:String="";
@Output()  updateList = new EventEmitter<{}>();

  constructor( public noteService:NoteService ,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconLiteral("image-icon", sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral("brush-icon", sanitizer.bypassSecurityTrustHtml(BRUSH_ICON))
    iconRegistry.addSvgIconLiteral("tick-icon", sanitizer.bypassSecurityTrustHtml(TICK_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("rendo-icon", sanitizer.bypassSecurityTrustHtml(REDO_ICON))
    iconRegistry.addSvgIconLiteral("undo-icon", sanitizer.bypassSecurityTrustHtml(UNDO_ICON ))
    iconRegistry.addSvgIconLiteral("trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral("collaborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("color-pallet-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))

    iconRegistry.addSvgIconLiteral("unarchive-icon", sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))

    iconRegistry.addSvgIconLiteral("archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("more-icon", sanitizer.bypassSecurityTrustHtml(MORE_ICON))

    iconRegistry.addSvgIconLiteral("pin-icon", sanitizer.bypassSecurityTrustHtml(PIN_ICON))
  }

  ngOnInit(): void {
  }
  toggleClose:boolean=true

  toggle(val:string)
  {

    if(val === 'close')
    {
    this.toggleClose=!this.toggleClose;
    const noteobj:{} ={
      "title": this.title,
      "description": this.desc,
      "reminder": "2024-02-01T13:06:31.579Z",
      "color": "",
      "image": "",
      "isArchieve": false,
      "isPin": false,
      "isTrash": false
    
    }
    this.noteService.addNote(noteobj).subscribe(res =>{
      console.log(res)
    },error => console.log(error))
    this.updateList.emit({action:"add",data:{title:this.title,description:this.desc,color:""}})
    }
    else
    {
      this.toggleClose = !this.toggleClose;
    }

    

  }


}
