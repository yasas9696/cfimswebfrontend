import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User={
    EmpID :'',
    username:'',
    email:'',
    password:'',
    name:'',
    department:'',
    type:'',

  }
  users:User[] = []
  selectedUser={} as User
  constructor(private router:Router , private toastr: ToastrService, private userservice: UserService ) { }

  ngOnInit() {
    this.user={
      EmpID :'',
      username:'',
      email:'',
      password:'',
      name:'',
      department:'',
      type:'',
    }
  //   this.userservice.getUsers().subscribe((res:any)=>{
  //     if(res.code==0){
  //       this.users=res.result
  //   }
  // })
  }

  cancel(){
    this.router.navigate([''])
  }
  addUser(){
    console.log(this.user)
    if(this.user.username==''){
      console.log('this fied cannot be empty')
      this.toastr.error("this fied  cannot be empty")
    }
    else if(this.user.email==''){
      console.log('this fied  cannot be empty')
      this.toastr.error("this fied  cannot be empty")

    }
    else if(this.user.password==''){
      console.log('this fied  cannot be empty')
      this.toastr.error("this fied  cannot be empty")

    }
    else if(this.user.name==''){
      console.log('this fied  cannot be empty')
      this.toastr.error("this fied  cannot be empty")

    }
    else if(this.user.department==''){
      console.log('this fied  cannot be empty')
      this.toastr.error("this fied  cannot be empty")

    }
    else if(this.user.type==''){
      console.log('this fied  cannot be empty')
      this.toastr.error("this fied  cannot be empty")

    }
    else{
      this.userservice.addUser(this.user).subscribe((res:any)=>{
        console.log(res)
        if(res.code==0){
          this.toastr.success("user added successfuly")

          this.ngOnInit()
          
        }else {
          this.toastr.error(res.message)

        }
      }
        
        );
      
    }


    
  }
 
  

}
