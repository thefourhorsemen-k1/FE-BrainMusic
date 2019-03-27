import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../shared/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public roles: string[];
  public authority: string;

  constructor(private tokenStorage: TokenStorageService,
              public router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.sessionStorage.clear();
    window.location.reload();
    this.router.navigate(['/']);
  }

}
