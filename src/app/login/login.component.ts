import { Component, OnInit } from '@angular/core';
import { Scrumuser } from "../scrumuser";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrumUserModel = new Scrumuser("louis", "louis@linuxjobber.com", "testing123", "regular user","Project Name");
}
