import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import {CrudComponent} from './user-side/crud/crud.component';
import {UserSideComponent} from './user-side/user-side.component';

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
      path: 'crud', component: UserSideComponent,
      canActivate:[AuthGuard],
      children: [{ path: '', component: CrudComponent}]
    },
    {
      path: 'userprofile', component: UserSideComponent,
      canActivate:[AuthGuard],
      children: [{path: '', component: UserProfileComponent}]
    }
];
