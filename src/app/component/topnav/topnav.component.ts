import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  bars=faBars;
  link:boolean=true

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.link===false){
      this.link=true
    }
    else{
      this.link=false
    }
    console.log(this.link);
    
   }
}
