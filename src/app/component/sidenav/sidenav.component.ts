import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
opened=true;
  constructor() { }

  ngOnInit(): void {
  }
open(){
  if(!this.opened){
this.opened=true
  }
  else{
this.opened=false
  }
}
}
