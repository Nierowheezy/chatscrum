import { Component, OnInit } from "@angular/core";
import { Scrumuser, ScrumUserLoginData } from "../scrumuser";
import { ScrumdataService } from "../scrumdata.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  // scrumUserLoginData = {}
  scrumUserLoginData = new ScrumUserLoginData("", "", "");
  // scrumUserModel = new Scrumuser("", "", "", "", "");

  constructor(private _scrumdataService: ScrumdataService, private _router: Router) {}

  ngOnInit(): void {}

  feedback = '';


  onLoginSubmit(){
    console.log(this.scrumUserLoginData);
    this._scrumdataService.login(this.scrumUserLoginData).subscribe(
      data => {
        console.log('success!', data)
        this.feedback = 'Your login was successfull'
        localStorage.setItem('token',data.token)
        this._router.navigate(['/scrumboard'])
      },
      error => {
        console.log('Error!', error)
        this.feedback = 'Invalid Login Credentials'
      }
    )

  }

}
