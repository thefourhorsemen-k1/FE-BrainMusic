import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import decode from 'jwt-decode';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService,
              public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // trỏ đến thông tin ở approuting
    const expectedRole = route.data.expectedRole;

    // lấy token trong sessionstorage để phân tách
    const token = sessionStorage.getItem('AuthToken');

    // phân tách token được gửi từ server lên để lấy thông tin ở payload
    const tokenPayload = decode(token);
    if (!this.auth.isAuthenticated() && tokenPayload.roles[0] !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
