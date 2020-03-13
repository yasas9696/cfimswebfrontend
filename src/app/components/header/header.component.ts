import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private router:Router,private movieservice:MovieService) { }

  logedin=false
  action = 'Login'
  actionType = 1
  ngOnInit() {

    this.movieservice.getMovies().subscribe((res:any)=>{
      res.result.forEach(movie => {
        this.options.push(movie.name)
      });
      })
      
          this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          if(localStorage.getItem('token')){
            this.action = 'LogOut'
            this.actionType = 2
            this.logedin=true
          }



  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  loginUser(){
    if(this.actionType == 2){
      localStorage.clear()
      this.router.navigate(['auth'])
    }
    else{
      this.router.navigate([''])

    }
    
  }

}
