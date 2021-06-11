import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { TllComponent } from './tll/tll.component';


const routes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path:'tll', component:TllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
