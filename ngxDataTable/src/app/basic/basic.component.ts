import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  temp:any;
  table:any;
  selected: any[] = [];
  
  ngOnInit() {

  }

   rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company', sortable: false }
   ];

   constructor() {
    this.fetch((data) => {
      // cache our list
     
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  //search Api
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  

  onActivate(event) {
    console.log('Event: activate', event);

    
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  // add() {
  //   this.selected.push(this.rows[1], this.rows[3]);
  // }

  // update() {
  //   this.selected = [ this.rows[1], this.rows[3] ];
  // }

  // remove() {
  //   this.selected = [];
  // }

  // displayCheck(row) {
  //   return row.name !== 'Ethel Price';
  // }
  getRowClass(row ){
    return row.gender === 'male '? 'male-row':'female-row';
  }

  open(row) {
     console.log("jfffffffffffs",row);
   }

//  var options = { 
//     fieldSeparator: ',',
//     quoteStrings: '"',
//     decimalseparator: '.',
//     showLabels: true, 
//     showTitle: true,
//     useBom: true,
//     noDownload: true,
//     headers: ["First Name", "Last Name", "ID"]
//   };

 // new Angular5Csv(data, 'My Report');
  // Angular5Csv(data, filename, options);
//  displayCheck(row) {
//     return row.name !== 'Ethel Price';
//  }

}

