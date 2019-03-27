import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtModule} from '@auth0/angular-jwt';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {AuthService} from './shared/services/auth.service';
import {httpInterceptorProviders} from './shared/auth/auth-interceptor';
import {EmailService} from './shared/services/email.service';
import {FeedbackService} from './shared/services/feedback.service';
import {HomepageComponent} from './homepage/homepage.component';
import {MainComponent} from './homepage/main/main.component';
import {FooterComponent} from './homepage/footer/footer.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {EmailFormComponent} from './admin/email-form/email-form.component';
import {ListFeedbackComponent} from './admin/list-feedback/list-feedback.component';
import {AdminComponent} from './admin/admin.component';
import {PlayerComponent} from './music/player/player.component';
import {MusicComponent} from './music/music.component';
import {ManageMusicComponent} from './admin/manage-music/manage-music.component';
import {FeedbackButtonComponent} from './feedback-button/feedback-button.component';
import {AboutComponent} from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomepageComponent,
    MainComponent,
    FooterComponent,
    FeedbackComponent,
    EmailFormComponent,
    ListFeedbackComponent,
    EmailFormComponent,
    AdminComponent,
    PlayerComponent,
    MusicComponent,
    ManageMusicComponent,
    FeedbackButtonComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return sessionStorage.getItem('AuthToken');
        }
      }
    }),
    MatButtonModule
  ],
  entryComponents: [
    FeedbackComponent,
    EmailFormComponent
  ],
  providers: [
    AuthService,
    EmailService,
    FeedbackService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
