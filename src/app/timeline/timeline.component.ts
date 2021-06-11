import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timeline = [
    {date:'',heading:'',content:'',main:'Draft Plan'},
    {date:'Nov 12',heading:'Draft Plan Generated!',content:'Draft Plan generated for DEC-2020 to JAN-2021 using Custom Plan template.',main:''},
    {date:'Nov 13',heading:'Plan Adjusted',content:'Make adjustments based on past performance',main:''},
    {date:'Nov 14',heading:'Receive Feedback',content:'Receive feedback from different teams on Draft Plan.',main:''},
    {date:'',heading:'',content:'',main:'v1.0'},
    {date:'Nov 15',heading:'Publish Plan',content:'Release plan v1.0 based on feedback received from different teams',main:''},
    {date:'Nov 16',heading:'Receive Feedback',content:'Receive feedback from different teams on Draft Plan.',main:''},
    {date:'',heading:'',content:'',main:'v1.1'},
    {date:'Nov 17',heading:'Publish Plan',content:'Release plan v1.0 based on feedback received from different teams',main:''},
    {date:'Nov 18',heading:'Receive Feedback',content:'Receive feedback from different teams on Draft Plan.',main:''},
    {date:'',heading:'',content:'',main:'Finish'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
