import { Component, OnInit } from '@angular/core';

import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'data-export-angular';
  isLoggedIn = true;
  public loggedIn: boolean = false;
  public userProfile: KeycloakProfile = {};

  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    //Getting user details
    this.loggedIn = await this.auth.isLoggedIn();
    if (this.loggedIn) {
      this.userProfile = await this.auth.loadUserProfile();
      // console.log(this.userProfile);
    } else {
      this.auth.login();
    }
  }
}
