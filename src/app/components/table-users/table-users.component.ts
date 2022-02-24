import { UserService } from './../services/user.service';
import { UserInterface } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements OnInit {
  viewForm: boolean = false;
  newForm!: boolean;
  dataUsers!: UserInterface[];

  constructor(
    private readonly router: Router,
    private readonly userSvc: UserService
  ) {
    this.userSvc.getAllUsers().subscribe({
      next: (data) => (this.dataUsers = data),
    });
  }

  ngOnInit(): void {}
  onNewUser(): void {
    this.newForm = true;
    this.viewForm = true;
  }
  onEditUser(): void {
    this.newForm = false;
    this.viewForm = true;
  }
  onSave(dataForm: UserInterface): void {
    console.log(dataForm);
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
}
