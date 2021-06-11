import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tll',
  templateUrl: './tll.component.html',
  styleUrls: ['./tll.component.css']
})
export class TllComponent implements OnInit {

  @Input('data') entries : [];

  constructor() { }

  ngOnInit() {
  }

}
