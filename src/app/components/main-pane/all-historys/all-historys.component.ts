import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { History } from './../../../models/history';
import { HistoryService } from './../../../services/history.service';

@Component({
  selector: 'app-all-historys',
  templateUrl: './all-historys.component.html',
  styleUrls: ['./all-historys.component.css']
})
export class AllHistorysComponent implements OnInit {

  historys:History[]=[]
  constructor( private historyservice:HistoryService, private toastr: ToastrService) { }
  displayedColumns: string[] = ['date','event','jobNumber','department','empName','items','action'];
  dataSource = new MatTableDataSource(this.historys);



  ngOnInit() {
    this.historyservice.getHistorys().subscribe((res:any)=>{
      this.historys=res.result
      this.dataSource.data=this.historys
      console.log(res.result)
    })
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeHistory(history){
    if(confirm('are you sure to remove this history?')){
      this.historyservice.deleteHistory(history).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("delete failed")
        }
        else{
          this.toastr.success("deleted successfuly")
          this.historys.splice(this.historys.indexOf(history) , 1)
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
