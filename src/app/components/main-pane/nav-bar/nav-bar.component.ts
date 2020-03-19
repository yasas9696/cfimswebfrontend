import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  islogedin:boolean= true
  constructor(private router:Router) { }
  isadmin = true

  ngOnInit() {
    if(localStorage.user != 'admin'){
      this.isadmin= false
    }
  }
 
  
  allMovies(){
    this.router.navigate(['all-movies'])
  }
  profileUser(){
    this.router.navigate(['profile-user'])
  }



  addMovies(){
    this.router.navigate(['add-movies'])
  }
  addUser(){
    this.router.navigate(['add-user'])
  }
  allHistory(){
    this.router.navigate(['all-history'])
  }
  
  

}
