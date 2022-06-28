import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../shared/guards/auth.guard';



const routes: Routes = [
  { path: "users", component: UsersListComponent, canActivate: [AuthGuard] },
  { path: "users/add", component: AddUserComponent, canActivate: [AuthGuard] },
  { path: "users/:id", component: UsersDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), //registring the child routs
    
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
