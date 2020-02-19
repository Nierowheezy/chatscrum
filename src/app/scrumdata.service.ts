import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Scrumuser, ScrumUserLoginData} from './scrumuser';


@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) {}

  _url = 'https://liveapi.chatscrum.com/scrum/api/scrumusers/';
  _loginUrl = 'https://liveapi.chatscrum.com/scrum/api-token-auth/';

  /**
   * httpOptions
   */
  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  signup(user: Scrumuser){
    return this._http.post<any>(this._url, {'email': user['email'], 'password': user['password'], 'full_name': user['fullname'],
    'usertype': user['type'], 'projname': user['projname']}, this.httpOptions);
  }

  login(user:ScrumUserLoginData){
    return this._http.post<any>(this._loginUrl, {'username': user['email'], 'password': user['password'], 'project': user['projname']}, this.httpOptions);
  }


  loggedIn(){
    return !!localStorage.getItem("token")
  }


}
