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
  dataForm?: UserInterface;

  constructor(private readonly router: Router) {}

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
}
