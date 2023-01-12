import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
onEnviar($event: any) {
throw new Error('Method not implemented.');
}
  isLogged = false;
  isLoggingFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;
form: FormGroup<any>;
persona: any;
Email: any;
Clave: any;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggingFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

onLogin(): void {
  this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
  this.authService.login(this.loginUsuario).subscribe(data =>{
    this.isLogged = true;
    this.isLoggingFail = false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorithies(data.authorities);
    this.roles = data.authorities;
    this.router.navigate([''])
  }, err => {
    this.isLogged = false;
    this.isLoggingFail = true;
    this.errMsj = err.error.mensaje;
    console.log(this.errMsj);
  })
}

}


