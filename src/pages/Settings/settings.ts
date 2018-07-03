import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CameraPage } from '../Camera/camera';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToCameraPage(){
    this.navCtrl.push(CameraPage);
  }
}
