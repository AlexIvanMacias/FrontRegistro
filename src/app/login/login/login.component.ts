import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private FormBuilder: FormBuilder, private _login:LoginService, private _router:Router, private _token:TokenService) { }

  ngOnInit(): void {
    if(window.localStorage.getItem('acces_token')){
      this._router.navigate(['/dashboard']);
    }
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }
  get f() { return this.loginForm.controls; }
  login() {
  
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this._login.getUsuario(this.loginForm.value).toPromise().then(data =>{
        console.log(data);
      this._token.setToken(data['token']);
      this._router.navigate(['/dashboard']);
      }).catch(error =>{
        console.log(error);
      });     
    }
  }
}
