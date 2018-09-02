import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Angular5Csv } from 'angular5-csv/Angular5-csv';
 import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule
  //  Angular5Csv
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
