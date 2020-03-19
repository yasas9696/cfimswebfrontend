import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { MainPaneComponent } from './components/main-pane/main-pane.component';
import {MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule, MatTableModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatDividerModule, MatProgressSpinnerModule,MatDialogModule,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AddUserComponent } from './components/main-pane/add-user/add-user.component';
import { AllMoviesComponent } from './components/main-pane/all-movies/all-movies.component';
import { AllUsersComponent } from './components/main-pane/all-users/all-users.component';
import { AddMoviesComponent } from './components/main-pane/add-movies/add-movies.component';
import { AllHistorysComponent } from './components/main-pane/all-historys/all-historys.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { SlideShowComponent } from './components/main-pane/slide-show/slide-show.component';
import { NavBarComponent } from './components/main-pane/nav-bar/nav-bar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    MainPaneComponent,
    AddUserComponent,
    AllMoviesComponent,
    AllUsersComponent,
    AddMoviesComponent,
    AllHistorysComponent,
    SearchBarComponent,
    SlideShowComponent,
    NavBarComponent,
    UserLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,ReactiveFormsModule,
    SlideshowModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTableModule,  
    MatDividerModule,
    MatProgressSpinnerModule,

    SlideshowModule,  

    SlideshowModule,
    MatDatepickerModule,

    MatNativeDateModule,
    HttpClientModule,
ToastrModule.forRoot(),
    MatNativeDateModule
  ],
  entryComponents:[SlideShowComponent],
  exports:[SlideShowComponent],
  providers: [SlideShowComponent,NavBarComponent,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
