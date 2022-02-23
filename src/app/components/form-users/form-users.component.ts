import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css'],
})
export class FormUsersComponent implements OnInit {
  @Output() viewForm = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onCancel(): void {
    this.viewForm.emit(false);
  }
}
