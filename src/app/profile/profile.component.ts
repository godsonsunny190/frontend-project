import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

current:any

  constructor() { }

  ngOnInit() {
  
  }
  getVal(val:any){
    this.current=val
  }


}
