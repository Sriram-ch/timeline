import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewEncapsulation } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';

import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgVerticalTimelineModule } from 'ng-vertical-timeline';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TllComponent } from './tll/tll.component';
import { WipComponent } from './wip/wip.component';
import { HighchartsChartComponent, HighchartsChartModule} from 'highcharts-angular';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { WIPBaseComponent } from './wip-base/wip-base.component';
import { MatCardModule } from '@angular/material/card'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TimelineComponent,
    TllComponent,
    WipComponent,
    WorkInProgressComponent,
    WIPBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgVerticalTimelineModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    HighchartsChartModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    ViewEncapsulation
  }
}
