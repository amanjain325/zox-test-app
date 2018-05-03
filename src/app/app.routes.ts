import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';
import { AuthGuard } from './service/authGuard.service';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'instagram',  component: InstagramComponent, canActivate: [AuthGuard] },
  { path: 'twitter',  component: TwitterComponent, canActivate: [AuthGuard]  },
];
