import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    //private builder: FormBuilder
    private router: Router
    ) {
    //this.initialCreateFormData(); 
  }

  form!: FormGroup;
  
  ngOnInit(): void {
  }
  onSubmit(): void {
    //this.router.navigate(['/',  "trader", "dashboard"]);
    this.router.navigate(['/',  "finance", "receive-list"]);
    // if (this.form.invalid)
    //   return this.alert.notify('something wrong');
    // // this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);
    // this.account
    //   .onLogin(this.form.value)
    //   .then(res => {
    //     if (!res)  return this.alert.notify('Username or Password invalid','info');
    //     this.authen.setAuthenticated(res._id);
    //     console.log(res);
    //     this.alert.notify('Login Success','info');
    //     this.router.navigate(['/', AppURL.Authen, AuthURL.CustomerList]);
    //   })
    //   .catch(err => this.alert.notify(err.Message));

  }
  // private initialCreateFormData() {
  //   this.form = this.builder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //     remember: [true]
  //   });
  // }
}