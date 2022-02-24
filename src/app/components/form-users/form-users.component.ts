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
  @Output() dataFormNew = new EventEmitter<UserInterface>();
  @Output() dataFormEdit = new EventEmitter<UserInterface>();
  @Input() formNew: boolean = true;
  @Input() dataEdit!: UserInterface;
  formUser!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.formNew) this.formUser = this.createNewForm();
    else this.formUser = this.createEditForm(this.dataEdit);
  }

  onCancel(): void {
    this.formUser.reset();
    this.viewForm.emit(false);
  }

  onSave(): void {
    const data = this.formUser.value;
    if (this.formNew) this.dataFormNew.emit(data);
    else this.dataFormEdit.emit(data);
    this.viewForm.emit(false);
    this.formUser.reset();
  }

  createNewForm(): FormGroup {
    //TODO: Validations
    const today = moment().format('DD-MM-YYYY');
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
  createEditForm(dataUser: UserInterface): FormGroup {
    //TODO: Validations
    const { dateIn } = dataUser;
    return this.fb.group({
      _id: [dataUser?._id],
      username: [dataUser.username],
      pass: [dataUser.pass],
      name: [dataUser.name],
      lastname: [dataUser.lastname],
      email: [dataUser.email],
      role: [dataUser.role],
      dateIn: [moment(dateIn).format('DD-MM-YYYY')],
    });
  }
}
