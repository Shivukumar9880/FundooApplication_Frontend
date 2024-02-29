import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import DataService from 'src/app/services/dataService/data.service';
import { ARCHIVE_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/svg-icons (1)';

@Component({
  selector: 'app-side-nav-container',
  templateUrl: './side-nav-container.component.html',
  styleUrls: ['./side-nav-container.component.scss'],
  host:{
    class : "app-side-nav-cnt"
  }
})
export class SideNavContainerComponent implements OnInit ,OnDestroy {

  state!:boolean;
  subsciption!:Subscription;
  constructor(public dataService:DataService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router) 
  {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
  }
  


  ngOnInit(): void {
    this.subsciption=this.dataService.currentMessage.subscribe(currState=>this.state=currState)
  }
  handleNavigation(route:String)
  {
    this.router.navigate(["dashboard/"+route]);
  }
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }


}
