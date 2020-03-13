import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  imageSources = new Array()

  constructor() { }

  ngOnInit() {
    
  this.imageSources=["assets/ban1.jpg","assets/ban2.jpg","assets/ban3.jpg","assets/ban4.jpg","assets/ban5.jpg","assets/ban6.jpg","assets/ban7.jpg","assets/ban8.jpg","assets/ban9.jpg"]
  }

}
