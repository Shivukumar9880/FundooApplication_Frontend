import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import DataService from 'src/app/services/dataService/data.service';
import { ACCOUNT_ICON, CANCEL_ICON, COLLABRATOR_ICON, DELETE_FOREVER_ICON, LIST_VIEW_ICON, LIST_VIWE, MENU_ICON, OTHER_MENU_ICON, REFRESH_ICON, RESTORE_ICON, SEARCH_ICON, SETTING_ICON } from 'src/assets/svg-icons (1)';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  state!:boolean;
  subscription!:Subscription;
  constructor(public dataService:DataService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public router:Router) { 
    iconRegistry.addSvgIconLiteral("menu-icon", sanitizer.bypassSecurityTrustHtml(MENU_ICON))
    iconRegistry.addSvgIconLiteral("search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("delete-icon", sanitizer.bypassSecurityTrustHtml(CANCEL_ICON))
    iconRegistry.addSvgIconLiteral("refresh-icon", sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("other-menu-icon", sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON))
    iconRegistry.addSvgIconLiteral("setting-icon", sanitizer.bypassSecurityTrustHtml(SETTING_ICON))
    iconRegistry.addSvgIconLiteral("account-icon", sanitizer.bypassSecurityTrustHtml(ACCOUNT_ICON))
    iconRegistry.addSvgIconLiteral("list-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIWE))
  }
 
  ngOnInit(): void {
    this.subscription=this.dataService.currentMessage.subscribe(state=>this.state=state)
  }
  toggleDrawerState()
  {
    console.log(this.state);
    this.dataService.changeDrawerState(!this.state)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  handleNoteOperations()
  {
    localStorage.removeItem('token')
    this.router.navigate(["login"])
  }



}
