import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{ SettingsPage } from '../Settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

}
