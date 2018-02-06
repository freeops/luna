import {Component, OnInit} from '@angular/core';
import {DataStore} from '../globals';
import {Config} from '../elements/table/table.component';

// import {Mats, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  rows = [
    {name: 'Austin', gender: 'Male', company: 'Swimlane'},
    {name: 'Dany', gender: 'Male', company: 'KFC'},
    {name: 'Molly', gender: 'Female', company: 'Burger King'},
  ];
  columns = [
    {prop: 'name'},
    {name: 'Gender'},
    {name: 'Company'}
  ];
  config = Config;

  constructor() {
    DataStore.NavShow = false;
    this.config.search = true;
    this.config.scrollbarH = true;
  }

  ngOnInit() {
  }

}
