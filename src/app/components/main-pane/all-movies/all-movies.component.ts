import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Movie } from 'src/app/models/movie';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../../../services/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movie:Movie[] = []
  constructor(private movieservice:MovieService  , public dialog:MatDialog,private toastr: ToastrService) { }
  displayedColumns: string[] = ['Type','Name', 'Model','Qr','Status','Capacity','Image','action'];
  dataSource = new MatTableDataSource(this.movie);

  ngOnInit() {
    this.movieservice.getMovies().subscribe((res:any)=>{

      this.movie=res.result
      this.dataSource.data=this.movie
      console.log(res.result)
  })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    removeMovie(movie){
      if(confirm('Are You sure to remove this Author?')){
        this.movieservice.deleteMovies(movie).subscribe((res:any)=>{
          if(res.code==1){
            this.toastr.error("Deletion Failed")
          }
          else{
            this.toastr.success("Deletion Successfull")
            this.movie.splice(this.movie.indexOf(movie) , 1)
            this.dataSource._updateChangeSubscription()
          }
          
            console.log(res.result)
          })
        }
      
    }
  
    refresh(){
      this.ngOnInit();
      this.dataSource._updateChangeSubscription()
    }
}
