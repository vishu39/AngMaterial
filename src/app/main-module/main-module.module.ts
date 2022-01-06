import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MaterialComponents=[
MatCardModule,
MatCheckboxModule,
MatDialogModule,
MatFormFieldModule,
MatListModule,
MatPaginatorModule,
MatMenuModule,
MatProgressBarModule,
MatRadioModule,
MatStepperModule,
MatTableModule,
MatIconModule,
MatExpansionModule,
MatTabsModule,
MatInputModule,
ScrollingModule
  ];
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MainModuleModule { }
