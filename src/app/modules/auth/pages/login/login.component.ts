import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faL, faLock, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'modules/auth/services/auth.service';
import Swal from 'sweetalert2';

interface Login {
  email: string,
  password: string
}

type ToLoginControls<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

type LoginForm = ToLoginControls<Login>;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userIcon = faUser
  public passwordIcon = faLock
  public loadingIcon = faSpinner

  public loadingLogin:boolean=false

  public loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { validators: [Validators.required] })
  })

  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  loginBtnClick(e:Event){
    e.preventDefault()

    Swal.fire({
      title:'algo',
      text:'un texto',
      icon:'info'
    })

    // this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)  
    //   .subscribe({
    //     next:respose=>{
    //       localStorage.clear()
    //       localStorage.setItem("token", respose.token)
    //       localStorage.setItem("refreshToken", respose.refreshToken)
    //       localStorage.setItem("isLoggedIn", "true")

    //       this.router.navigate(['/miembros'])

    //       Swal.fire({
    //         title:'algo',
    //         text:'un texto',
    //         icon:'info'
    //       })
    //     }
    //   })
  }
}
