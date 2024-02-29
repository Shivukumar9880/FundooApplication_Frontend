import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NoteContainerComponent } from './components/note-container/note-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { EditLabelContainerComponent } from './components/edit-label-container/edit-label-container.component';
import { RemainderContainerComponent } from './components/remainder-container/remainder-container.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SingupComponent},
  {path:"dashboard",component:DashbordComponent, canActivate:[AuthGuard], children: [
    {path:"note",component:NoteContainerComponent},
    {path:"archive",component:ArchiveContainerComponent},
    {path:"trash",component:TrashContainerComponent},
    {path:"edit",component:EditLabelContainerComponent},
    {path:"remainder",component:RemainderContainerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
