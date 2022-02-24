import { UserService } from './../services/user.service';
import { UserInterface } from './../../interfaces/user.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent {
  viewForm: boolean = false;
  newForm!: boolean;
  dataUsers!: UserInterface[];
  userToEdit!: UserInterface;

  constructor(
    private readonly router: Router,
    private readonly userSvc: UserService
  ) {
    this.refreshDataTable();
  }
  onNewUser(): void {
    this.newForm = true;
    this.viewForm = true;
  }
  onEditUser(userData: UserInterface): void {
    this.userToEdit = userData;
    this.newForm = false;
    this.viewForm = true;
  }
  onSaveNew(dataForm: UserInterface): void {
    this.userSvc.createUser(dataForm).subscribe({
      next: (res) => {
        if (res.msg == 'ok') {
          window.alert('User added successfully. =)');
          this.refreshDataTable();
        }
      },
    });
  }
  onSaveEdit(dataForm: UserInterface): void {
    this.userSvc.editUser(dataForm).subscribe({
      next: (res) => {
        if (res.msg == 'ok') {
          window.alert('User updated successfully. =)');
          this.refreshDataTable();
        }
      },
    });
  }
  ondDelete(id: string, index: number): void {
    if (!confirm('Are you sure?')) return;
    this.userSvc.deteleUser(id).subscribe({
      next: (res) => {
        this.dataUsers.splice(index);
        window.alert('Successfully removed =)');
      },
    });
  }
  refreshDataTable(): void {
    this.userSvc.getAllUsers().subscribe({
      next: (data) => (this.dataUsers = data),
    });
  }
}
