import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../auth/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  formLogin!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.formLogin.get('username')?.value, this.formLogin.get('password')?.value).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.router.navigate(['/usuario']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
