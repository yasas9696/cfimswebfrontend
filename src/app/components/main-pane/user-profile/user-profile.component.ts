import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService, ToastRef } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private router:Router ,private userService:UserService , private toastr: ToastrService ) { }
  obj={
    username:''
  }
  

    user= {} as User
    ngOnInit() {
  this.obj.username=localStorage.userId
      this.userService.getUserbyUsername(this.obj).subscribe((res:any)=>{
       this.user=res.result[0]
        
  
      })
  
  
    }
    cancel(){
      this.router.navigate([''])
    }
    updateUser(){
      this.userService.updateUser(this.user).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("update failed")
        }
        else{
          this.toastr.success("update successfuly")
        }
       })
    }
  
  }