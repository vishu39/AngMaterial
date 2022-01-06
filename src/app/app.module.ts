import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './component/topnav/topnav.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { TopnavModule } from './component/topnav/topnav.module';
import { sidenavModule } from './component/sidenav/sidenav.module';
import { MainModuleModule } from './main-module/main-module.module';
import { ListComponent } from './component/list/list.component';
import { TableComponent } from './component/table/table.component';
import { CardComponent } from './component/card/card.component';
import { CheckANDradioComponent } from './component/check-andradio/check-andradio.component';
import { ExpensionPannelComponent } from './component/expension-pannel/expension-pannel.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { SteppersComponent } from './component/steppers/steppers.component';
import { FormsComponent } from './component/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    ListComponent,
    TableComponent,
    CardComponent,
    CheckANDradioComponent,
    ExpensionPannelComponent,
    TabsComponent,
    SteppersComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    TopnavModule,
    sidenavModule,
    MainModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
