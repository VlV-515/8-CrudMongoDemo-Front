import { UserInterface } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements OnInit {
  viewForm: boolean = false;
  dataForm?: UserInterface;

  constructor() {}

  ngOnInit(): void {}
}
