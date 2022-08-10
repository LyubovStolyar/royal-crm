import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('emailField') emailField!: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  validateData(): boolean {
    if (!this.loginForm.valid) {
      return false;
    }

    const password = this.loginForm.get('password');
    const retypePassword = this.loginForm.get('retypePassword');

    if (
      !password ||
      !retypePassword ||
      password.value !== retypePassword.value
    ) {
      return false;
    }

    return true;
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    if (!this.loginForm.valid){
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['/customers-component']),
      error: (err) => console.log(err)      
    })
  }
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
   

    this.emailField.nativeElement.focus();
  }
}
