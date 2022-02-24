import { environment } from './../../../environments/environment.prod';
import {
  UserInterface,
  UserResponseInterface,
} from './../../interfaces/user.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  //GetAll
  getAllUsers(): Observable<UserInterface[]> {
    return this.http
      .get<UserInterface[]>(`${environment.URL_API}/crud`)
      .pipe(catchError((e) => this.handlerError(e)));
  }
  //Create
  //Update
  //Delete
  deteleUser(id: string): Observable<UserResponseInterface> {
    return this.http
      .delete<UserResponseInterface>(`${environment.URL_API}/crud/${id}`)
      .pipe(catchError((e) => this.handlerError(e)));
  }
  //Handler
  handlerError(err: HttpErrorResponse): Observable<never> {
    const { error } = err;
    const errorMsg = error.msg ?? 'Error Unknow';
    window.alert(errorMsg);
    return throwError(errorMsg);
  }
}
