import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SigninInfo} from '../model/signin-info';
import {Observable} from 'rxjs';
import {SignupInfo} from '../model/signup-info';
import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtResponse} from '../model/jwtresponse';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://brainmusic-be.herokuapp.com/signin';
  private signupUrl = 'https://brainmusic-be.herokuapp.com/signup';

  constructor(private http: HttpClient,
              public jwtHelper: JwtHelperService) {
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('AuthToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

  attemptAuth(credentials: SigninInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignupInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
