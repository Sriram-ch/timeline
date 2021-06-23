import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { TllComponent } from './tll/tll.component';
import { WipComponent } from './wip/wip.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


const routes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path:'wip', component: WipComponent},
  { path:'workinprogress', component: WorkInProgressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
