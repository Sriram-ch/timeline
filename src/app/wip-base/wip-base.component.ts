import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wip-base',
  templateUrl: './wip-base.component.html',
  styleUrls: ['./wip-base.component.css']
})
export class WIPBaseComponent implements OnInit {

  @Input('data') data = [];

  constructor() { }

  ngOnInit() {
  }

}
