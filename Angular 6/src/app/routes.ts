import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import {UserSideComponent} from './user-side/user-side.component';
import {BookComponent} from './user-side/book/book.component';
import {NewsComponent} from './user-side/news/news.component';
import {EditbookComponent} from './user-side/book/editbook/editbook.component';
import {CreatebookComponent} from './user-side/book/createbook/createbook.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
      path: 'userprofile', component: UserSideComponent,
      canActivate: [AuthGuard],
      children: [{path: '', component: UserProfileComponent}]
    },
  {
    path: 'books', component: UserSideComponent,
    canActivate: [AuthGuard],
    children: [{path: '', component: BookComponent}]
  },
  {
    path: 'editbook', component: EditbookComponent
  },
  {
    path: 'createbook', component: CreatebookComponent
  },
  {
    path: 'news', component: UserSideComponent,
    canActivate: [AuthGuard],
    children: [{path: '', component: NewsComponent}]
  }


];
