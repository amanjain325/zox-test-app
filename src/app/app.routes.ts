import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'instagram',  component: InstagramComponent },
  { path: 'twitter',  component: TwitterComponent },
];
