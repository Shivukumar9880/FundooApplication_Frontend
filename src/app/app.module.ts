import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';




import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingupComponent } from './components/singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteContainerComponent } from './components/note-container/note-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { SideNavContainerComponent } from './components/side-nav-container/side-nav-container.component';
import { RemainderContainerComponent } from './components/remainder-container/remainder-container.component';
import { EditLabelContainerComponent } from './components/edit-label-container/edit-label-container.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { EditNodeComponent } from './components/edit-node/edit-node.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    DashbordComponent,
    NoteContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    SideNavContainerComponent,
    RemainderContainerComponent,
    EditLabelContainerComponent,
    HeaderComponent,
    NoteCardComponent,
    CreateNoteComponent,
    
    EditNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
