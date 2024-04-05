import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'LoginFormofNFCS'
  submitted = false;
  loginForm: any = new FormGroup({})

  constructor(private formbuilder: FormBuilder, private router: Router) {

  }



  ngOnInit(): void {
    this.FormIntalization()

  }

  FormIntalization() {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  login() {
    console.log(this.loginForm.value.userName);
    console.log(this.loginForm.value.password);
    if (this.loginForm.value.userName === "Sowmya" && this.loginForm.value.password === '123') {
     
      this.submitted = true
      console.log(this.submitted);

    }
    else {
      this.submitted = false;
      //  console.log(this.login);
      console.log("incorrect user details")
    }
  }
}




