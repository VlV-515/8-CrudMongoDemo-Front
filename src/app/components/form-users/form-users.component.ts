import { UserInterface } from './../../interfaces/user.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css'],
})
export class FormUsersComponent implements OnInit {
  @Output() viewForm = new EventEmitter<boolean>();
  @Output() dataForm = new EventEmitter<UserInterface>();
  @Input() formNew: boolean = true;
  formUser!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formUser = this.createNewForm();
  }

  onCancel(): void {
    this.formUser.reset();
    this.viewForm.emit(false);
  }

  onSave(): void {
    const data = this.formUser.value;
    this.dataForm.emit(data);
    this.viewForm.emit(false);
    this.formUser.reset();
  }

  createNewForm(): FormGroup {
    //TODO: Validations
    const today = moment().format("YYYY-MM-DD")
    return this.fb.group({
      _id: [],
      username: [],
      pass: [],
      name: [],
      lastname: [],
      email: [],
      role: [],
      dateIn: [today],
    });
  }
}
