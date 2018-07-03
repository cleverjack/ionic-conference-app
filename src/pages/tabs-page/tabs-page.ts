import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
// import { MapPage } from '../map/map';
// import { SchedulePage } from '../schedule/schedule';
// import { SpeakerListPage } from '../speaker-list/speaker-list';
import { HomePage } from '../home/home';
import { SettingsPage } from '../Settings/settings';
import { CameraPage } from '../Camera/camera';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = SettingsPage;
  tab3Root: any = CameraPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
