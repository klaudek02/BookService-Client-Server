// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserSideComponent } from './user-side/user-side.component';
import { BookComponent } from './user-side/book/book.component';
import { NewsComponent } from './user-side/news/news.component';
import { CreatebookComponent } from './user-side/book/createbook/createbook.component';
import { EditbookComponent } from './user-side/book/editbook/editbook.component';
import {BookService} from "./shared/book.service";
import {MaterialModule} from "./material/material.module";
import {NewsService} from "./shared/news.service"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowNewsComponent } from './user-side/news/shownews/shownews.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    UserSideComponent,
    BookComponent,
    NewsComponent,
    CreatebookComponent,
    EditbookComponent,
    ShowNewsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService, BookService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
