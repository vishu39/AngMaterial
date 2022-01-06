import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private matdiag:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.matdiag.open(DialogComponent)
  }
}
