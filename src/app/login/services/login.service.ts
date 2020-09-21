import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient

  ) { }
  getUsuario(data) {
    return this._http.post(environment.LOGIN, data)
  }
}
