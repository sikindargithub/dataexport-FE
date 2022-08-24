import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './keycloak.intializer';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, KeycloakAngularModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
  ],
})
export class AuthModule {}
