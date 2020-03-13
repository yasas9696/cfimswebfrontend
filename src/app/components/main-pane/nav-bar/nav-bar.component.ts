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
 
  allUsers(){
    this.router.navigate(['all-users'])
  }
  allmovies(){
    this.router.navigate(['all-movies'])
  }
  addhistory(){
    this.router.navigate(['add-history'])
  }



  addMovies(){
    this.router.navigate(['add-movies'])
  }
  addUser(){
    this.router.navigate(['add-users'])
  }
  
  

}
