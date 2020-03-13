import { Component, OnInit } from '@angular/core';
import {Movie } from '../../../models/movie';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../../../services/movie.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  movie:Movie={
    item_type:'',
    item_name:'',
    item_model:'',
    item_qr:'',
    item_capacity:'',
    item_status:'',
   
   
  }

  constructor(private router:Router,private movieService:MovieService,private toastr: ToastrService) { }

  ngOnInit() {
    this.movie={
      item_type:'',
      item_name:'',
      item_model:'',
      item_qr:'',
      item_capacity:'',
      item_status:'',
  }
}
cancel(){
  this.router.navigate([''])

}
addmovies(){
  debugger
  console.log(this.movie)
  if(this.movie.item_type==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")
  }
  else if(this.movie.item_name==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")

  }
  else if(this.movie.item_model==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")

  }
  else if(this.movie.item_qr==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")
  }
  else if(this.movie.item_status==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")
  }
  else if(this.movie.item_capacity==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")
  }
  else if(this.movie.item_image==''){
    console.log('this field cannot be empty')
    this.toastr.error("this field cannot be empty")
  }

  
  else{
    debugger
    this.movieService.addMovies(this.movie).subscribe((res:any)=>{
      if(res.code==0){

        this.toastr.success("item added successfully")
        
        this.ngOnInit()
      }
      else{
        
    this.toastr.error("failed")
      }
    });
  }


  
}
}
