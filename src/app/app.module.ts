import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { HeaderComponent } from './header/header.component';
import { InstagramComponent } from './instagram/instagram.component';

import '../styles/styles.scss';
import '../styles/headings.css';
import { LoginComponent } from './login/login.component';
import { StorageService } from './service/storage.service';
import { UserService } from './service/user.service';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { TwitterComponent } from './twitter/twitter.component';
// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  StorageService,
  UserService
];
const COMPONENTS = [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  InstagramComponent,
  LoginComponent,
  TwitterComponent
];
const PIPES = [
  EllipsisPipe
];



interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
