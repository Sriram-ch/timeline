import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit {

  wip = [
    [ {name: 'Reaction' , IP:'IP7', color:'#008C38',values : [{key:'315',value:'5132kg'},{key:'316',value:'5136kg'}]} ],
    [ {name: 'Production' , IP:'IP3', color:'#008C38',values : [{key:'315',value:'5132kg'},{key:'316',value:'5136kg'}]} ],
    [ {name: 'Reaction' , IP:'IP7', color:'#008C38',values : [{key:'315',value:'5132kg'},{key:'316',value:'5136kg'}]} ],
    [ {name: 'Production' , IP:'IP3', color:'#008C38',values : [{key:'315',value:'5132kg'},{key:'316',value:'5136kg'}]} ]
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

