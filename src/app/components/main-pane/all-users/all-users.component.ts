import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  // islogedin:boolean= true
 
  // isadmin = true

users:User[] = []

  constructor(public dialog:MatDialog,private toastr: ToastrService,private router:Router,private userservice:UserService) { }
  displayedColumns: string[] = ['Name', 'Email','username','password','department','type','action'];
  dataSource = new MatTableDataSource(this.users);

// obj={
//   username:''
// }


  // user= {} as User

  ngOnInit() {

    // this.obj.username=localStorage.userId
    // this.userservice.getUserbyUsername(this.obj).subscribe((res:any)=>{
    //  this.user=res.result[0]
    //   console.log(this.user)
    // })
  




    // if(localStorage.user != 'admin'){
    //   this.isadmin= false
    // }
    this.userservice.getUsers().subscribe((res:any)=>{

      this.users=res.result
      this.dataSource.data=this.users
      console.log(res.result)
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 
  
  removeUser(user){
    if(confirm('are you sure to remove this user?')){
      this.userservice.deleteUser(user).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("delete failed")
        }
        else{
          this.toastr.success("deleted successfuly")
          this.users.splice(this.users.indexOf(user) , 1)
          this.dataSource._updateChangeSubscription()
        }
        
          console.log(res.result)
        })
      }
    }
   
    makeAdmin(user){
      if(confirm('are you sure to make this user as an admin?')){
        user.type = 'admin'
        this.userservice.updateUser(user).subscribe((res:any)=>{
          if(res.code==1){
            this.toastr.error("failed to make admin")
          }
          else{
            this.toastr.success("make admin successfuly")
          }
         })
      }
     
    }
    refresh(){
      this.ngOnInit();
      this.dataSource._updateChangeSubscription()
    }

}