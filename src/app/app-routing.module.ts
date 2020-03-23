import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideShowComponent } from './components/main-pane/slide-show/slide-show.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { AuthGuard } from './auth.guard';
import { AddMoviesComponent } from './components/main-pane/add-movies/add-movies.component';
import { AddUserComponent } from './components/main-pane/add-user/add-user.component';
import { AllHistorysComponent } from './components/main-pane/all-historys/all-historys.component';
import { AllMoviesComponent } from './components/main-pane/all-movies/all-movies.component';
import { AllUsersComponent } from './components/main-pane/all-users/all-users.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NavBarComponent } from './components/main-pane/nav-bar/nav-bar.component';


const routes: Routes = [

  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'slideshow',
        component: SlideShowComponent,
      },
      {
        path: '',
        redirectTo: '/slideshow',
        pathMatch: 'full'
      },




      {
        path : 'add-movies',
        component : AddMoviesComponent
      },
      {
        path: '',
        redirectTo: '/add-movies',
        pathMatch: 'full'
      },




      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: '',
        redirectTo: '/add-user',
        pathMatch: 'full'
      },




      {
        path: 'all-historys',
        component: AllHistorysComponent,
       },
      {
        path: '',
        redirectTo: '/all-historys',
        pathMatch: 'full'
      },




      {
        path: 'all-movies',
        component: AllMoviesComponent ,
      },
      {
        path: '',
        redirectTo: '/all-movies',
        pathMatch: 'full'
      },

     

      {
        path: 'all-users',
        component: AllUsersComponent,
      },
      {
        path: '',
        redirectTo: '/all-users',
        pathMatch: 'full'
      },

      {
        path: 'nav-bar',
        component: NavBarComponent,
      },
      {
        path: '',
        redirectTo: '/nav-bar',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'auth',
        component: UserLoginComponent,
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
